import React, { useState } from 'react';

function App() {
    // State to store the keyword entered by the user
    const [keyword, setKeyword] = useState('');
    // State to store the quote and author fetched from the API
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    // Function to fetch a quote based on the entered keyword
    const fetchQuote = async () => {
        const apiUrl = `https://zenquotes.io/api/quotes?keyword=${keyword}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (data && data.length > 0) {
                setQuote(data[0].q); // Set the quote text
                setAuthor(data[0].a); // Set the author of the quote
            } else {
                setQuote("No quotes found for that keyword. Try another!");
                setAuthor("");
            }
        } catch (error) {
            setQuote("Error fetching quote. Please try again later.");
            setAuthor("");
        }
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchQuote();
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Uplifting Quotes</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Enter a keyword (e.g., happiness)"
                    style={{ padding: '10px', width: '200px' }}
                />
                <button type="submit" style={{ padding: '10px', marginLeft: '5px' }}>Get Quote</button>
            </form>
            <div style={{ marginTop: '20px' }}>
                {quote && <p style={{ fontSize: '1.5em', fontStyle: 'italic' }}>"{quote}"</p>}
                {author && <p style={{ fontWeight: 'bold' }}>- {author}</p>}
            </div>
        </div>
    );
}

export default App;