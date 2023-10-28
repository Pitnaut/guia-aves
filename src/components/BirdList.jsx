import React from "react";
import { Link } from 'react-router-dom';
import { birds } from '../data/data';
import BirdCard from './BirdCard';

const BirdList = () => {

  return (
    <div className='bird-list'>
      {birds.map((bird) => (
        <Link key={bird.id} to={`/birds/${bird.nombre}`}>
          <BirdCard bird={bird} />
        </Link>
      ))}
    </div>
  )
}

export default BirdList;

