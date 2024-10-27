import React, { useState } from 'react';

function App() {
    // States to store the inputted topic and corresponding advice
    const [keyword, setKeyword] = useState('');
    const [advice, setAdvice] = useState('');

    // Fetch an advice from the API based on the user's input
    const fetchAdvice = async () => {
        const apiUrl = `https://api.adviceslip.com/advice/search/${encodeURIComponent(keyword || 'Love')}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setAdvice(data["slips"][0]["advice"]); // Fetch the advice from the provided json
        } catch (error) { //some bit of error handling here if the API is not working or we cannot find a relevant advice. 
            setAdvice("Can't find the advice you are looking for");
        }
    };

    // What happens everytime the user submits the input
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchAdvice();
    };

    //outputted HTML
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Advice Generator</h1>
            <form onSubmit={handleSubmit}>
                <p>I need advice on:</p>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Enter anything"
                    style={{ padding: '10px', marginBottom: '10px' }}
                />
               
            </form>
            <div style={{ marginTop: '20px' }}>
                {advice && <p style={{ fontSize: '1.5em', fontStyle: 'italic' }}>"{advice}"</p>}
            </div>
        </div>
    );
}

export default App;
