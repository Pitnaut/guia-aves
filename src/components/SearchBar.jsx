import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Buscar aves...'
        value={query}
        onChange={handleInputChange}
      />
      <button type='submit'>Buscar</button>
    </form>
  )
}