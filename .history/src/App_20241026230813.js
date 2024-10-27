import React, { useState } from 'react';

function App() {
    // States to store the user's selected situation, respective quote, and author
    const [keyword, setKeyword] = useState('');
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    // Function to fetch a quote based on the selected keyword
    const fetchQuote = async () => {
        const apiUrl = `https://zenquotes.io/api/random`;
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
            <h1>Your Daily Motivation</h1>
            <form onSubmit={handleSubmit}>
                <p>What's Wrong?</p>
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