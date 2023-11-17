import React from 'react';
import { Link } from 'react-router-dom';
import { birds } from '../data/data';
import '../stylesheets/BirdDetail.css';
import wingIconLeft from '../assets/wingIconLeft.png'
import wingIconRight from '../assets/wingIconRight.png'
import { foodToEmoji } from '../data/foodToEmoji'; 

const BirdDetail = ({ bird }) => {

  const { nombre, cientifico, orden, familia, amenaza, estacion, envergadura, imagen, alttext, descripcion, autor, seo, wiki, alimentacion, autor_page } = bird;

  const currentIndex = birds.findIndex(bird => bird.nombre === nombre);

  const prevBird = birds[currentIndex - 1];
  const nextBird = birds[currentIndex + 1];

  return (
    <div className='main-container'>
      <div className='navegador-aves'>
        {prevBird && <Link className="link-style" to={`/birds/${prevBird.nombre}`}>Ave anterior</Link>}
        <Link className="link-style" to='/birds/'>Volver</Link>
        {nextBird && <Link className="link-style" to={`/birds/${nextBird.nombre}`}>Ave siguiente</Link>}
      </div>
      <div className='grid-layout'>
        <div className='nombre-ave'>
          <h2>{nombre}</h2>
          <p>{cientifico}</p>
        </div>
        <div className='imagen'>   
          <img src={`/images/${imagen}.png`} alt={alttext} />
        </div>
        <div className='info-ave'>
          <p>Orden: {orden}</p>
          <p>Familia: {familia}</p>
          <p>Amenaza: {amenaza}</p>
          <p>Estación: {estacion}</p>
        </div>
        <div className='envergadura'>
          <img src={wingIconLeft} alt='wingIconLeft' />
          <p> {envergadura}</p>
          <img src={wingIconRight} alt='wingIconRight' />
        </div>
        <div className='box'>
          {descripcion}
        </div>
        <div className='box'>
          <a href={autor_page} target='_blank'>{autor}</a>
          <br></br>
          <a href={seo} target='_blank'>SEO</a>
          <br></br>
          <a href={wiki} target='_blank'>Wikipedia</a>
        </div>
        <div className='box'>
        Alimentación: {alimentacion.map(alimento => foodToEmoji[alimento] || alimento).join('/')}
        </div>
      </div>
    </div>
  )
}

export default BirdDetail;