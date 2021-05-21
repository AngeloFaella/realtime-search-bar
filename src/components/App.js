import React, { useState } from 'react';

import '../styles/App.css';
import Quote from './Quote';
import SearchBar from './SearchBar';
import { requestQuotes } from '../apis/animeChan';

const App = () => {
  const [quotes, setQuotes] = useState([]);

  const onSearchSubmit = async term => {
    console.log('New Search submit:', term);
    const quotesArray = await requestQuotes(term);
    setQuotes(quotesArray);
  };

  const clearResults = () => setQuotes([]);

  const renderedQuotes = quotes.map((quote, i) => {
    return <Quote quote={quote} key={i} />
  })

  return (
    <div className='app'>
      <h1 className='title'>Realtime Search Bar</h1>

      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults}/>

      {/* { renderedQuotes.length === 0 &&
        <div className='disclaimer-container'>
          <p className='disclaimer'>
            <a href="https://github.com/AngeloFaella">Angelo Faella</a>
          </p>
        </div>
      } */}

      <div className='main-content'>
        {renderedQuotes}
      </div>

    </div>
  );
};

export default App;
