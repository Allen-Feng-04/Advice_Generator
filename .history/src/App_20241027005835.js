import React, { useState } from 'react';

function App() {
    // States to store the inputted topic and corresponding advice
    const [keyword, setKeyword] = useState('');
    const [advice, setAdvice] = useState('');

    // Fetch an advice from the API based on the user's input
    const fetchQuote = async () => {
        const apiUrl = `https://api.adviceslip.com/advice/search/${encodeURIComponent(keyword || 'Love')}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setQuote(data["slips"][0]["advice"]); // Set the quote text
        } catch (error) { //some bit of error handling here if the API is not working or we cannot find a relevant advice. 
            setQuote("Can't find the advice you are looking for");
        }
    };

    // What happens everytime the user submits the input
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchQuote();
    };

    //outputted HTML
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Advice Generator</h1>
            <form onSubmit={handleSubmit}>
                <p>I need advice on:</p>   //the input box
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter anything"
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