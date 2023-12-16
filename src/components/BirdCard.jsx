import React, { useContext } from "react";
import '../stylesheets/BirdCard.css';
import { BirdContext } from './BirdContext';

const BirdCard = ({ bird }) => {

  const { imagen, alttext, nombre } = bird;

  const { seenBird } = useContext(BirdContext); 

  return (
    <div className='bird-card'>
        <div key={nombre} className='bird-image'>
          <img
            src={`/images/${imagen}.png`} 
            alt={alttext} />
            </div>
            <div
            className="bird-name">
          <h2>{nombre}</h2>
          {seenBird.includes(nombre) && <span>👀</span>}
        </div>
    </div>
  );
}

export default BirdCard;