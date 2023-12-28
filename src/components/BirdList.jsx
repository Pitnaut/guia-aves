import React from "react";
import { birds } from '../data/data';
import BirdCard from './BirdCard';
import '../stylesheets/BirdList.css';

const BirdList = () => {
  return (
    <div className='bird-list'>
      {birds.map((bird) => {
        return (
            <BirdCard 
              bird={bird} 
              className={({ isActive }) => isActive ? 'active-bird' : 'bird'}
              key={bird.nombre}        />
        );
      })}
    </div>
  )
}

export default BirdList;