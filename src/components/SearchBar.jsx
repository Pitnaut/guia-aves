import React, { useState } from 'react';
import '../stylesheets/SearchBar.css'

export const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return(
      <form 
        onSubmit={handleSubmit}
        className='searchform'     
      >
        <input
          className='inputbox'
          type='text'
          placeholder='Buscar aves...'
          value={query}
          onChange={handleInputChange}
        />
        <button 
          type='submit'
          className='search-button'
        >
          &#128269;
        </button>
      </form>
  )
}