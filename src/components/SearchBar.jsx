import React, { useState, useRef, useEffect } from 'react';
import '../stylesheets/SearchBar.css';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { birds } from '../data/data';

export const SearchBar = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
      const normalizedBirdName = searchQuery
        ? searchQuery.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
        : '';
      const matchingBirds = birds.filter(
        (bird) =>
          bird.nombre
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes(normalizedBirdName)
      );
      const query = createSearchParams({ nombre: searchQuery });
      if (searchQuery) {
        navigate({
          pathname: '/search',
          search: `${query}`,
          state: { matchingBirds },
        });
      }
  }, [searchQuery, navigate]);

  const onSearchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSearchHandler} className='searchform'>
      <input
        className='inputbox'
        type='text'
        placeholder='Buscar aves...'
        ref={searchInputRef}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type='submit' className='search-button'>
        &#128269;
      </button>
    </form>
  );
};