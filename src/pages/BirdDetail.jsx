import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { birds } from '../data/data';
import '../stylesheets/BirdDetail.css';
import { foodToEmoji } from '../data/foodToEmoji'; 
import { BirdContext } from '../components/BirdContext';
import wingIconLeft from '../assets/wingIconLeft.png'
import wingIconRight from '../assets/wingIconRight.png'

const BirdDetail = () => {

  const { nombre: nombreParam } = useParams();
  const birdName = nombreParam.replace(/-/g, ' ');
  const normalizedBirdName = birdName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const bird = birds.find((bird) => bird.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() === normalizedBirdName);
  
  const { seenBird, markAsSeen } = useContext(BirdContext); 
  const currentIndex = birds.findIndex(bird => bird.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() === normalizedBirdName);
  const prevBird = birds[currentIndex - 1];
  const nextBird = birds[currentIndex + 1];

  const [isClicked, setIsClicked] = useState(false);

  const [fadeEffect, setFadeEffect] = useState(null);

  const handleAnimationEnd = () => {
    setFadeEffect(null);
  };

  if (!bird) {
    return <div>No se encontró el pájaro</div>;
  }

  const { nombre, cientifico, orden, familia, amenaza, estacion, envergadura, imagen, alttext, descripcion, autor, seo, wiki, alimentacion, autor_page } = bird;

  return (
    <div className='main-container'>
      <div className='navegador-aves'>
      <div className='links-container'>
        <div className='ave-anterior'>
          {prevBird && <Link className="link-style" to={`/birds/${prevBird.nombre.replace(/ /g, '-')}`} onClick={() => setFadeEffect('fade-out')}>Ave anterior</Link>}
        </div>
        <div className='todas-aves'><Link className="link-style" to='/birds/'>Volver</Link></div>
        <div className='ave-siguiente'>
          {nextBird && <Link className="link-style" to={`/birds/${nextBird.nombre.replace(/ /g, '-')}`} onClick={() => setFadeEffect('fade-out')}>Ave siguiente</Link>}        
        </div>  
      </div>
      <div className='seen-button'>
      <button onClick={() => { markAsSeen(nombre); setIsClicked(true); }}>¿Avistada?</button>
      <span className={`icon ${isClicked ? 'rotate-on-click' : ''}`} key={seenBird.includes(nombre) ? 'seen' : 'not-seen'}>
        {seenBird.includes(nombre) ? '✔️' : '❌'}
      </span>
      </div>
      </div>
      <div className={`grid-layout ${fadeEffect}`} onAnimationEnd={handleAnimationEnd}>        
        <div className='nombre-ave'>
          <h1>{nombre}</h1>
          <p>{cientifico}</p>
        </div>
        <div className='imagen'>   
          <img src={`/images/${imagen}.png`} alt={alttext} />
        </div>
        <div className='info-ave'>
          <p><span className='label'>Orden</span>:  {orden}</p>
          <p><span className='label'>Familia</span>: {familia}</p>
          <p><span className='label'>Amenaza</span>: {amenaza}</p>
          <p><span className='label'>Estación</span>: {estacion}</p>
        </div>
        <div className='descripcion-ave'>
          {descripcion}
        </div>
        <div className='envergadura'>
          <img src={wingIconLeft} alt='wingIconLeft' />
          <p> {envergadura}</p>
          <img src={wingIconRight} alt='wingIconRight' />
        </div>
        <div className='alimentacion'>
        {alimentacion.map(alimento => foodToEmoji[alimento] || alimento).join('')}
        </div>
        <div className='autor'>
          <a href={autor_page} target='_blank'>{autor}</a>
        </div>
        <div className='enlaces'>
          <a href={seo} target='_blank'>SEO</a>
          <a href={wiki} target='_blank'>Wikipedia</a>
        </div>
      </div>
    </div>
  )
}


export default BirdDetail;