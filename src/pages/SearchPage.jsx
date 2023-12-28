import React from 'react';
import { birds } from '../data/data';
import BirdCard from '../components/BirdCard';
import { useSearchParams, Link } from 'react-router-dom';
import '../stylesheets/BirdPage.css';

const SearchPage = () => {
  const [queryParams] = useSearchParams();
  const birdName = queryParams.get('nombre');
  const normalizedBirdName = birdName
    ? birdName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    : '';
  const matchingBirds = birds.filter(
    (bird) =>
      bird.nombre
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(normalizedBirdName)
  );

  return (
    <div className='search-page'>
      {matchingBirds.length > 0 ? (
        <div className='bird-list'>
          {matchingBirds.map((bird) => (
            <Link
            key={bird.nombre}
            to={`/birds/${bird.nombre.replace(/ /g, '-')}`}
            style={{ textDecoration: 'none' }}>
              <BirdCard key={bird.nombre} bird={bird} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No se encontró información de aves</p>
      )}
    </div>
  );
};

export default SearchPage;