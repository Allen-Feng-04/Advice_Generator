import React, { useState } from 'react';

function App() {
    // State to store the selected keyword
    const [keyword, setKeyword] = useState('');
    // State to store the quote and author fetched from the API
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    // Function to fetch a quote based on the selected keyword
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
Using Checkboxes (Multiple Keywords)
With checkboxes, you can allow users to select multiple categories at once. You’ll need to slightly adjust the fetchQuote function to handle multiple keywords.

Here's how you might implement this:

javascript
Copy code
import React, { useState } from 'react';

function App() {
    // State to store the selected keywords
    const [keywords, setKeywords] = useState([]);
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    // Function to toggle keywords in state
    const toggleKeyword = (value) => {
        setKeywords((prevKeywords) =>
            prevKeywords.includes(value)
                ? prevKeywords.filter((keyword) => keyword !== value)
                : [...prevKeywords, value]
        );
    };

    // Function to fetch a quote based on selected keywords
    const fetchQuote = async () => {
        const apiUrl = `https://zenquotes.io/api/quotes?keyword=${keywords.join(',')}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (data && data.length > 0) {
                setQuote(data[0].q); // Set the quote text
                setAuthor(data[0].a); // Set the author of the quote
            } else {
                setQuote("No quotes found for those keywords. Try different ones!");
                setAuthor("");
            }
        } catch (error) {
            setQuote("Error fetching quote. Please try again later.");
            setAuthor("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (keywords.length > 0) {
            fetchQuote();
        } else {
            setQuote("Please select at least one category.");
            setAuthor("");
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Uplifting Quotes</h1>
            <form onSubmit={handleSubmit}>
                <p>Select one or more categories:</p>
                <label>
                    <input
                        type="checkbox"
                        value="happiness"
                        checked={keywords.includes("happiness")}
                        onChange={() => toggleKeyword("happiness")}
                    />
                    Happiness
                </label>
                <label style={{ marginLeft: '10px' }}>
                    <input
                        type="checkbox"
                        value="success"
                        checked={keywords.includes("success")}
                        onChange={() => toggleKeyword("success")}
                    />
                    Success
                </label>
                <label style={{ marginLeft: '10px' }}>
                    <input
                        type="checkbox"
                        value="love"
                        checked={keywords.includes("love")}
                        onChange={() => toggleKeyword("love")}
                    />
                    Love
                </label>
                <label style={{ marginLeft: '10px' }}>
                    <input
                        type="checkbox"
                        value="work"
                        checked={keywords.includes("work")}
                        onChange={() => toggleKeyword("work")}
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