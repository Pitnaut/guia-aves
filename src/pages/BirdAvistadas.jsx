import React, {useContext, useEffect} from 'react'
import { BirdContext } from '../components/BirdContext'
import '../stylesheets/BirdPage.css'
import BirdCard from '../components/BirdCard'
import { birds } from '../data/data'

const BirdAvistadas = () => {
  const { seenBird } = useContext(BirdContext);

  const filteredBirds = birds.filter((bird) => seenBird.includes(bird.nombre));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div key={'avistadas'} className='bird-avistadas-container'>
        <h1>Aves avistadas</h1>
      <div className='bird-avistadas'>
        {filteredBirds.map((bird) => (  
        <BirdCard key={bird.id} bird={bird} />
      ))}
      </div>
    </div>
  );
}

export default BirdAvistadas