import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import '../stylesheets/NavBar.css';
import logo from '../assets/logo.png';
import { birds } from '../data/data';

const NavBar = () => {

  const [selectedOrden, setSelectedOrden] = useState("");
  const [selectedAmenaza, setSelectedAmenaza] = useState("");
  const [selectedEstacion, setSelectedEstacion] = useState("");


  //extraer valores unicos para cada menu en formato array
  const ordenOptions = Array.from(new Set(birds.map((bird) => bird.orden)));
  const amenazaOptions = Array.from(new Set(birds.map((bird) => bird.amenaza)));
  const estacionOptions = Array.from(new Set(birds.map((bird) => bird.estacion)));


  return (
    <nav className='navigator'>
      <div className="sections">
        <img src={logo} alt='Logotipo de guía de aves' />
        <ul className='sections-list'>
          <li className='menu-item'>
            <label htmlFor="ordenSelect"></label>
            <select
              id="ordenSelect"
              value={selectedOrden}
              onChange={(e) => setSelectedOrden(e.target.value)}
            >
              <option value="">Orden</option>
              {ordenOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </li>
          <li className='menu-item'>
            <label htmlFor="amenazaSelect"></label>
            <select
              id="amenazaSelect"
              value={selectedAmenaza}
              onChange={(e) => setSelectedAmenaza(e.target.value)}
            >
              <option value="">Amenaza</option>
              {amenazaOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </li>
          <li className='menu-item'>
            <label htmlFor="estacionSelect"></label>
            <select
              id="estacionSelect"
              value={selectedEstacion}
              onChange={(e) => setSelectedEstacion(e.target.value)}
            >
              <option value="">Estación</option>
              {estacionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </li>
          <li className='menu-item'>Todas las aves</li>
          <li className='menu-item'>Guía de uso</li>
        </ul>
      </div>
      <div className='searchbar'>
        <SearchBar />
      </div>
    </nav>
  );

}

export default NavBar;