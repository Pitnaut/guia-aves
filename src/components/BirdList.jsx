import React from "react";
import '../stylesheets/BirdList.css'
import { birds } from '../data/data'

const BirdList = () => {

  return (
    <div className='bird-list'>
      {birds.map((bird) => (
        <div key={bird.id} className='bird-container'>
          <img 
            className="bird-image"
            src={`../../public/images/${bird.imagen}.png`} 
            alt={bird.alttext} />
          <h2>{bird.nombre}</h2>
        </div>
      ))}
    </div>
  )
}

export default BirdList;