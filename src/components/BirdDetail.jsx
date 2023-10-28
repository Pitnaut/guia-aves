import React from 'react';

const BirdDetail = ({ bird }) => {

  const { nombre, cientifico, orden, familia, amenaza, estacion, envergadura, imagen } = bird;

  return (
    <div className="card">
      <div className="card-body">
      <img src={`../../public/images/${imagen}.png`} alt={nombre} />
        <h2>{nombre}</h2>
        <p>{cientifico}</p>
        <p>Orden: {orden}</p>
        <p>Familia: {familia}</p>
        <p>Amenaza: {amenaza}</p>
        <p>Estación: {estacion}</p>
        <p>Envergadura: {envergadura}</p>
      </div>
    </div>
  )
}

export default BirdDetail;