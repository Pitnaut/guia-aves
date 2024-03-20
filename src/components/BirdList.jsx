import React, { useState, useEffect } from "react";
import { birds } from '../data/data';
import BirdCard from './BirdCard';
import '../stylesheets/BirdList.css';
import '../stylesheets/birdLoader.css';

const BirdList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bird-list'>
      {loading ? (
        <div className="loader-container">
          <p>Cargando aves...</p>
          <div className='loader'></div>
        </div>
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