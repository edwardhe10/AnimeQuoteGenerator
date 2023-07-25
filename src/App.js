import "./App.css";
import Quote from "./components/Quote.js";
import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null,
  });

  const fetchQuote = async () => {
    return await fetch("https://animechan.xyz/api/random").then((response) =>
      response.json()
    );
  };

  useEffect(() => {
    // Create a separate async function to fetch the quote
    const getQuote = async () => {
      const newQuote = await fetchQuote();
      setQuote(newQuote);
    };
    // Call the async function inside useEffect
    getQuote();
  }, []);

  const getNewQuote = async () => {
    setQuote(await fetchQuote());
  };

  return (
    <div className="quote-generator">
      <Quote quote={quote} />
      <button onClick={getNewQuote}>New Quote</button>
    </div>
  );
}

export default App;
