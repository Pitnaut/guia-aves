import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import '../stylesheets/NavBar.css';
import { birds } from '../data/data';
import { NavLink, useNavigate } from 'react-router-dom';



const NavBar = () => {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedOrden, setSelectedOrden] = useState("");
  const [selectedAmenaza, setSelectedAmenaza] = useState("");
  const [selectedEstacion, setSelectedEstacion] = useState("");

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  }

  const ordenOptions = Array.from(new Set(birds.map((bird) => bird.orden)));
  const amenazaOptions = Array.from(new Set(birds.map((bird) => bird.amenaza)));
  const estacionOptions = Array.from(new Set(birds.map((bird) => bird.estacion)));

  const handleOrdenSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedOrden(selectedValue);
    navigate(`/birds/orden/${selectedValue}`);
    setIsDropdownVisible(false);
  };

  const handleAmenazaSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedAmenaza(selectedValue);
    navigate(`/birds/amenaza/${selectedValue}`);
    setIsDropdownVisible(false);
  };
  
  const handleEstacionSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedEstacion(selectedValue);
    navigate(`/birds/estacion/${selectedValue}`);
    setIsDropdownVisible(false);
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
          <li className='dropdown' onClick={toggleDropdown}>
          <div className='dropbtn'><span className='filter-btn'>Filtrar</span></div>
            {isDropdownVisible && (
              <div className={`dropdown-content ${isDropdownVisible ? 'dropdown-content-active' : ''}`}>
                <div className='custom-select'>
                  <select
                    value={selectedOrden}
                    onChange={handleOrdenSelect}
                    onClick={(e) => e.stopPropagation()}        
                  >
                    <option value="" disabled hidden defaultValue>Orden</option>
                      {ordenOptions.map((option) => (       
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))} 
                  </select>
                </div>
                <div className='custom-select'>
                  <select
                    value={selectedAmenaza}
                    onChange={handleAmenazaSelect}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option value="" disabled hidden defaultValue>Amenaza</option>
                      {amenazaOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                  </select>
                </div>
                <div className='custom-select'>
                  <select
                    value={selectedEstacion}
                    onChange={handleEstacionSelect}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option value="" disabled hidden defaultValue>Estación</option>
                      {estacionOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            )}
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