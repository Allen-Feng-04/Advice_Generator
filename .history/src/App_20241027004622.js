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
        const apiUrl = `https://api.adviceslip.com/advice/search/${encodeURIComponent(name || 'Love')}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setQuote(data["slips"][0]["advice"]); // Set the quote text
        } catch (error) {
            setQuote("Can't find the advice you are looking for");
        }
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchQuote();
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Advice Generator</h1>
            <form onSubmit={handleSubmit}>
                <p>I need advice on:</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter a name"
                    style={{ padding: '10px', marginBottom: '10px' }}
                />
               
            </form>
            <div style={{ marginTop: '20px' }}>
                {quote && <p style={{ fontSize: '1.5em', fontStyle: 'italic' }}>"{quote}"</p>}
            </div>
        </div>
    );
}

export default App;