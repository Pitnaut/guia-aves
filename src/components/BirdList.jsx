import React, { useState, useEffect } from "react";
import { birds } from '../data/data';
import BirdCard from './BirdCard';
import '../stylesheets/BirdList.css';

const BirdList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // ajusta este tiempo según sea necesario

    return () => clearTimeout(timer); // limpia el temporizador si el componente se desmonta
  }, []);

  return (
    <div className='bird-list'>
      {loading ? (
        <div className='loader'>Cargando...</div> // reemplaza esto con tu propio spinner o cargador
      ) : (
        birds.map((bird) => {
          return (
            <BirdCard 
              bird={bird} 
              className={({ isActive }) => isActive ? 'active-bird' : 'bird'}
              key={bird.nombre}        
            />
          );
        })
      )}
    </div>
  )
}

export default BirdList;