import React, { useContext } from "react";
import '../stylesheets/BirdCard.css';
import { BirdContext } from './BirdContext';
import medal from '../assets/medal.png'
import { Link } from 'react-router-dom';

const BirdCard = ({ bird }) => {

  const { imagen, alttext, nombre } = bird;
  const { seenBird } = useContext(BirdContext); 

  return (
    <Link
      key={nombre} 
      to={`/birds/${bird.nombre.replace(/ /g, '-')}`}
      style={{ textDecoration: 'none' }} >
    <div className='bird-card'>
        <div key={nombre} className='bird-image'>
          <img
            src={`/images/${imagen}.png`} 
            alt={alttext} />
            {seenBird.includes(nombre) && <img className='medal' src={medal} alt="medal" />}
            </div>
            <div
            className="bird-name">
          <h2>{nombre}</h2>      
        </div>
    </div>
    </Link>
  );
}

export default BirdCard;