import React, { useState } from 'react';

function App() {
    // State to store the selected keyword
    const [keyword, setKeyword] = useState('');
    // State to store the entered name
    const [name, setName] = useState('');
    // State to store the quote fetched from the API
    const [quote, setQuote] = useState('');

    // Function to fetch a quote based on the selected keyword
    const fetchQuote = async () => {
        const apiUrl = `https://insult.mattbas.org/api/insult.json?who=${encodeURIComponent(name || 'Friend')}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setQuote(data.insult); // Set the quote text
        } catch (error) {
            setQuote("Error fetching quote. Please try again later.");
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
                <p>Enter a name:</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter a name"
                    style={{ padding: '10px', marginBottom: '10px' }}
                />
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
            </div>
        </div>
    );
}

export default App;