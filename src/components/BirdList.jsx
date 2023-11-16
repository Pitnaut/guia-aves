import React from "react";
import { Link } from 'react-router-dom';
import { birds } from '../data/data';
import BirdCard from './BirdCard';
import '../stylesheets/BirdList.css';

const BirdList = () => {

  return (
    <div className='bird-container'>
      <div className='bird-list'>
        {birds.map((bird) => (
          <Link
          key={bird.nombre} 
          to={`/birds/${bird.nombre}`}
          style={{ textDecoration: 'none' }}
          >
            <BirdCard bird={bird} 
            className={({ isActive }) => isActive ? 'active-bird' : 'bird'}/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BirdList;