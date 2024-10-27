import React, { useState } from 'react';

function App() {
    // State to store the selected keyword
    const [keyword, setKeyword] = useState('');
    // State to store the quote and author fetched from the API
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    // Function to fetch a quote based on the selected keyword
    const fetchQuote = async () => {
        const apiUrl = `https://zenquotes.io/api/random/`;
        try {
            const response = await fetch(apiUrl);
            var data = await response.json();
            console.log(data);
            setQuote("success"); // Set the quote text
            setAuthor("success"); // Set the author of the quote
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
                <p>Select a category:</p>
                <label>
                    <input
                        type="radio"
                        value="happiness"
                        checked={keyword === "happiness"}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    Happiness
                </label>
                <label style={{ marginLeft: '10px' }}>
                    <input
                        type="radio"
                        value="success"
                        checked={keyword === "success"}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    Success
                </label>
                <label style={{ marginLeft: '10px' }}>
                    <input
                        type="radio"
                        value="love"
                        checked={keyword === "love"}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    Love
                </label>
                <label style={{ marginLeft: '10px' }}>
                    <input
                        type="radio"
                        value="work"
                        checked={keyword === "work"}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    Work
                </label>
                <br />
                <button type="submit" style={{ padding: '10px', marginTop: '10px' }}>Get Quote</button>
            </form>
            <div style={{ marginTop: '20px' }}>
                {quote && <p style={{ fontSize: '1.5em', fontStyle: 'italic' }}>"{quote}"</p>}
                {author && <p style={{ fontWeight: 'bold' }}>- {author}</p>}
            </div>
        </div>
    );
}

export default App;