import React from 'react'
import { birds } from '../data/data'
import { useParams } from 'react-router-dom'
import '../stylesheets/BirdPage.css'
import BirdCard from '../components/BirdCard'
import CN from '../assets/CN.png'
import CR from '../assets/CR.png'
import DD from '../assets/DD.png'
import LC from '../assets/LC.png'
import NT from '../assets/NT.png'
import VU from '../assets/VU.png'


const BirdAmenaza = () => {
  const { amenaza } = useParams()
  const filteredBirds = birds.filter((bird) => bird.amenaza === amenaza)
  let amenazaImg = '';
  
  switch (amenaza) {
    case 'En peligro':
        amenazaImg = CN;
      break;
      case 'En peligro crítico':
        amenazaImg = CR;
      break;
      case 'Vulnerable':
        amenazaImg = VU;
        break;
      case 'Casi amenazado':
        amenazaImg = NT;
      break;
      case 'Datos insuficientes':
        amenazaImg = DD;
      break;
      case 'Preocupación menor':
        amenazaImg = LC;
      break;
  }


  return (
    <div key={amenaza}  className='bird-amenaza-container'>
      <div className='header-amenaza'>
      <h1>{amenaza}</h1>
      {amenaza !== 'Especie exótica invasora' && <img src={amenazaImg} alt={amenaza} />}
      </div>
    <div className='bird-amenaza'>
      {filteredBirds.map((bird) => ( 
        <BirdCard key={bird.id} bird={bird} />
      ))}
    </div>
    </div>
  )
}

export default BirdAmenaza;