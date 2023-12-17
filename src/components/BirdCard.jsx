import React, { useContext } from "react";
import '../stylesheets/BirdCard.css';
import { BirdContext } from './BirdContext';
import medal from '../assets/medal.png'

const BirdCard = ({ bird }) => {

  const { imagen, alttext, nombre } = bird;

  const { seenBird } = useContext(BirdContext); 

  return (
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
  );
}

export default BirdCard;