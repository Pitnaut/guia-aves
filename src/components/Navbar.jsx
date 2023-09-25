import React from 'react';
import { SearchBar } from './SearchBar';
import '../stylesheets/NavBar.css';

export const NavBar = () => {

  return(
    <nav className='navigator'>

    <ul classname="sections">
      <li>Todas las aves</li>
      <li>Orden</li>
      <li>Amenaza</li>
      <li>Estación</li>
      <li>Guía de uso</li>
    </ul>

    <SearchBar />

  </nav>
  )
  

}