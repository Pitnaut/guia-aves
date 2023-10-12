import React from "react";
import '../stylesheets/BirdCard.css';

const BirdCard = ({bird}) => {

  const { id, imagen, alttext, nombre } = bird;

  return (
    <div className='bird-card'>
        <div key={id} className='bird-container'>
          <img 
            className="bird-image"
            src={`../../public/images/${imagen}.png`} 
            alt={alttext} />
          <h2>{nombre}</h2>
        </div>
    </div>
  );
}

export default BirdCard;