import React from 'react';

import '../styles/Quote.css';

const Quote = ({quote}) => {
    return (
        <div className='quote-container'>
          <p className="quote">
            "{quote.quote}"
          </p>
          <p className="quote-author">
            Quote by
            <span className='highlight'> {quote.character} </span>
            from
            <span className='highlight'> {quote.anime}</span>
          </p>
        </div>
      );
};

export default Quote;

