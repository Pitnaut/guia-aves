import React from 'react';
import { birds } from '../data/data';
import { useParams } from 'react-router-dom';
import BirdDetail from '../components/BirdDetail';
import '../stylesheets/BirdPage.css';

const BirdPage = () => {
  const { nombre } = useParams();
  const birdName = nombre.replace(/-/g, ' ');
  const bird = birds.find((bird) => bird.nombre === birdName);

  if (!bird) {
    return <div>No se encontró el pájaro</div>;
  }

  return (
    <div>
      <BirdDetail bird={bird} />
    </div>
  );
};

export default BirdPage;

