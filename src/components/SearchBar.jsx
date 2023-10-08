import React, { useRef } from 'react';
import '../stylesheets/SearchBar.css';
import { useNavigate, createSearchParams } from 'react-router-dom'

export const SearchBar = () => {

  const navigate = useNavigate();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      nombre: searchInputRef.current.value
    }

    const query = createSearchParams(searchQuery)

    navigate({
      pathname: '/search',
      search: `${query}`
    })
  };
  

  return(
      <form 
        onSubmit={onSearchHandler}
        className='searchform'     
      >
        <input
          className='inputbox'
          type='text'
          placeholder='Buscar aves...'
          ref={searchInputRef}
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