import React, { useState } from 'react';

function App() {
    const [keyword, setKeyword] = useState('');
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState(null);

    const fetchQuote = async () => {
        const apiUrl = `https://zenquotes.io/api/quotes?keyword=${keyword}`;
        
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            if (data && data.length > 0) {
                setQuote(data[0].q); // Set the quote text
                setAuthor(data[0].a); // Set the author of the quote
                setError(null); // Clear any previous error
            } else {
                setQuote("No quotes found for that keyword. Try another!");
                setAuthor("");
            }
        } catch (error) {
            console.error("Error fetching quote:", error);
            setError("Error fetching quote. Please try again later.");
            setQuote("");
            setAuthor("");
        }
    };

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
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {quote && <p style={{ fontSize: '1.5em', fontStyle: 'italic' }}>"{quote}"</p>}
                {author && <p style={{ fontWeight: 'bold' }}>- {author}</p>}
            </div>
        </div>
    );
}

export default App;