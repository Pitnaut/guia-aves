import React from 'react';
import '../stylesheets/BirdDetail.css';

const BirdDetail = ({ bird }) => {

  const { nombre, cientifico, orden, familia, amenaza, estacion, envergadura, imagen, alttext, descripcion, autor, seo, wiki, alimentacion, autor_page } = bird;

  return (
    <div className='grid-layout'>
      <div className='box'>
        <h2>{nombre}</h2>
        <p>{cientifico}</p>
      </div>
      <div className='box'>
        {alimentacion}
      </div>
      <div className='box'>
        <img src={`/images/${imagen}.png`} alt={alttext} />
      </div>
      <div className='box'>
        <p>Orden: {orden}</p>
        <p>Familia: {familia}</p>
        <p>Amenaza: {amenaza}</p>
        <p>Estación: {estacion}</p>
      </div>
      <div className='box'>
        <p> {envergadura}</p>
      </div>
      <div className='box'>
        {descripcion}
      </div>
      <div className='box'>
        <a href={autor_page} target='_blank'>{autor}</a>
        <br></br>
        <a href={seo} target='_blank'>SEO</a>
        <br></br>
        <a href={wiki} target='_blank'>WIKIPEDIA</a>
      </div>
      <div className='box'>
        <p>Ave anterior</p>
        <p>Volver</p>
        <p>Ave siguiente</p>
      </div>

    </div>
  )
}

export default BirdDetail;