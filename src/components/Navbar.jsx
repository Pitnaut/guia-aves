import React from 'react';
import { SearchBar } from './SearchBar';
import '../stylesheets/NavBar.css';

const NavBar = () => {

  return(
    <nav className='navigator'>
    <div classname="sections">
      <ul className='sections-list'>
        <li>Todas las aves</li>
        <li>Orden</li>
        <li>Amenaza</li>
        <li>Estación</li>
        <li>Guía de uso</li>
      </ul>
    </div>
    <div className='searchbar'>
      <SearchBar />
    </div>
  </nav>
  )
}

export default NavBar;