import React from 'react'
import { birds } from '../data/data'
import { useParams, Link } from 'react-router-dom'
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
        <Link
          key={bird.nombre}
          to={`/birds/${bird.nombre.replace(/ /g, '-')}`}
          style={{ textDecoration: 'none' }}>
        <BirdCard key={bird.id} bird={bird} />
        </Link>
      ))}
    </div>
    </div>
  )
}

export default BirdEstacion;