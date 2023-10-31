import React from 'react';
import '../stylesheets/BirdDetail.css';

const BirdDetail = ({ bird }) => {

  const { nombre, cientifico, orden, familia, amenaza, estacion, envergadura, imagen, alttext, descripcion } = bird;

  return (
    <div className="card">
      <div className="card-image">
      <img src={`/images/${imagen}.png`} alt={alttext} />
      </div>
      <div className="card-body">
        <h2>{nombre}</h2>
        <p>{cientifico}</p>
        <p>Orden: {orden}</p>
        <p>Familia: {familia}</p>
        <p>Amenaza: {amenaza}</p>
        <p>Estación: {estacion}</p>
        <p>Envergadura: {envergadura}</p>
        <p>{descripcion}</p>
      </div>
    </div>
  )
}

export default BirdDetail;