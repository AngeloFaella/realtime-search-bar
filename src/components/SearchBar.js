import React, { useEffect, useState } from 'react';

import '../styles/SearchBar.css'

const SearchBar = ({onSearchSubmit, clearResults}) => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    // update 'term' value after 1 second from the last update of 'debouncedTerm'
    useEffect(() => {
        const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
        return () => clearTimeout(timer);
    }, [debouncedTerm])

    // submit a new search
    useEffect(() => {
        if(term !== ''){
            onSearchSubmit(term);
        }
        else{
            clearResults();
        }
    }, [term]);

    return (
      <div className='searchbar'>
        <input 
            className='searchbar-input' 
            type='text' 
            placeholder="Search by title. . ."
            onChange={e => setDebouncedTerm(e.target.value)}
            value={debouncedTerm}/>
      </div>
    );
};

export default SearchBar;

