import React from 'react'
import { birds } from '../data/data'
import { useParams } from 'react-router-dom'
import '../stylesheets/BirdPage.css'
import BirdCard from '../components/BirdCard'

const BirdEstacion = () => {
  const { estacion } = useParams()
  const filteredBirds = birds.filter((bird) => bird.estacion === estacion)

  return (
    <div key={estacion} className='bird-estacion-container'>
      <h1>{estacion}</h1>
    <div className='bird-estacion'>
      {filteredBirds.map((bird) => (  
        <BirdCard key={bird.id} bird={bird} />
      ))}
    </div>
    </div>
  )
}

export default BirdEstacion;