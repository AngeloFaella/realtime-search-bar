import React, { useState } from 'react';
import '../styles/App.css';
import Quote from './Quote';
import SearchBar from './SearchBar';

const App = () => {
  const [quotes, setQuotes] = useState([]);

  const onSearchSubmit = async term => {
    console.log('New Search submit:', term);
    const res = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${term}`);
    const quotesArray = await res.json();
    setQuotes(quotesArray);
  }

  const renderedQuotes = quotes.map((quote, i) => {
    return <Quote quote={quote} key={i} />
  })

  return (
    <div className='app'>
      <h1 className='title'>Realtime Search Bar</h1>
      <SearchBar
        onSearchSubmit={term => onSearchSubmit(term)} />
      <div className='main-content'>
        {renderedQuotes}
      </div>
    </div>
  );
};

export default App;
