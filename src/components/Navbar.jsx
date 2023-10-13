import React, { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import '../stylesheets/NavBar.css';
import { birds } from '../data/data';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {

  const [selectedOrden, setSelectedOrden] = useState("");
  const [selectedAmenaza, setSelectedAmenaza] = useState("");
  const [selectedEstacion, setSelectedEstacion] = useState("");

  const navigate = useNavigate();

  //extraer valores unicos para cada menu en formato array
  const ordenOptions = Array.from(new Set(birds.map((bird) => bird.orden)));
  const amenazaOptions = Array.from(new Set(birds.map((bird) => bird.amenaza)));
  const estacionOptions = Array.from(new Set(birds.map((bird) => bird.estacion)));

  const handleOrdenSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedOrden(selectedValue);
    navigate(`/birds/orden/${selectedValue}`);
  };

  const handleAmenazaSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedAmenaza(selectedValue);
    navigate(`/birds/amenaza/${selectedValue}`);
  };
  
  const handleEstacionSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedEstacion(selectedValue);
    navigate(`/birds/estacion/${selectedValue}`);
  }


  return (
    <nav className='navigator'>
      <div className="sections">        
        <ul className='sections-list'>
          <li className='menu-item'>
            <NavLink 
              to='/'
              className={({ isActive }) => isActive ? 'active-link' : 'link'}>
              Home
            </NavLink>
          </li>
          <li className='menu-item'>
            <select
              value={selectedOrden}
              onChange={handleOrdenSelect}        
            >
              <option value="" disable selected hidden>Orden</option>
              {ordenOptions.map((option) => (       
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </li>
          <li className='menu-item'>
            <select
              value={selectedAmenaza}
              onChange={handleAmenazaSelect}
            >
              <option value="" disable selected hidden>Amenaza</option>
              {amenazaOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </li>
          <li className='menu-item'>
            <select
              value={selectedEstacion}
              onChange={handleEstacionSelect}
            >
              <option value="" disable selected hidden>Estación</option>
              {estacionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </li>
          <li className='menu-item'>
            <NavLink 
              to='/birds'
              className={({ isActive }) => isActive ? 'active-link' : 'link'}>
              Todas las aves
            </NavLink>
          </li>
          <li className='menu-item'>
            <NavLink 
              to='/about'
              className={({ isActive }) => isActive ? 'active-link' : 'link'}>
              Guía de uso
            </NavLink>
            </li>
        </ul>
      </div>
      <div className='searchbar'>
        <SearchBar />
      </div>
    </nav>
  );

}

export default NavBar;