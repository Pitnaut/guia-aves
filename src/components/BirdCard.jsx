import React from "react";
import '../stylesheets/BirdCard.css';

const BirdCard = ({ bird }) => {

  const { id, imagen, alttext, nombre } = bird;

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
        </div>
    </div>
  );
}

export default BirdCard;