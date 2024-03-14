import React, {useEffect} from 'react';
import { birds } from '../data/data';
import BirdCard from '../components/BirdCard';
import { useSearchParams } from 'react-router-dom';
import '../stylesheets/BirdPage.css';

const SearchPage = () => {

 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [queryParams] = useSearchParams();
  const birdName = queryParams.get('nombre');
  const normalizedBirdName = birdName
    ? birdName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/ /g, '-')
    : '';
  const matchingBirds = birds.filter(
    (bird) =>
      bird.nombre
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ /g, '-')
        .includes(normalizedBirdName)
  );

  return (
    <div className='search-page'>
      {matchingBirds.length > 0 ? (
        <div className='bird-list'>
          {matchingBirds.map((bird) => (
            <BirdCard bird={bird} key={bird.nombre} />
          ))}
        </div>
      ) : (
        <p>No se encontró información de aves</p>
      )}
    </div>
  );
};

export default SearchPage;