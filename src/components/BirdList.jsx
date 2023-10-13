import React from "react";
import { birds } from '../data/data';
import BirdCard from './BirdCard';

const BirdList = () => {

  return (
    <div className='bird-list'>
      {birds.map((bird) => (
        <BirdCard key={bird.id} bird={bird} />
      ))}
    </div>
  )
}

export default BirdList;