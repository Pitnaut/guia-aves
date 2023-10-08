import React from 'react';
import { birds } from '../data/data';
import { useSearchParams } from 'react-router-dom';
import '../stylesheets/BirdPage.css';

const SearchPage = () => {
  const [queryParams] = useSearchParams();
  const birdName = queryParams.get('nombre');
  const normalizedBirdName = birdName
    ? birdName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    : '';
  const bird = birds.some(
    (bird) =>
      bird.nombre
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(normalizedBirdName) ||
      (bird.nombreAlternativo &&
        bird.nombreAlternativo
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(normalizedBirdName))
  )
    ? birds.find(
        (bird) =>
          bird.nombre
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes(normalizedBirdName) ||
          (bird.nombreAlternativo &&
            bird.nombreAlternativo
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .includes(normalizedBirdName))
      )
    : null;

  return (
    <div className='search-page'>
      {bird ? (
        <div className='bird-list'>
          <div key={bird.id} className='bird-container'>
            <img
              className='bird-image'
              src={`../../public/images/${bird.imagen}.png`}
              alt={bird.alttext}
            />
            <h2>{bird.nombre}</h2>
          </div>
        </div>
      ) : (
        <p>No se encontró información del ave</p>
      )}
    </div>
  );
};

export default SearchPage;