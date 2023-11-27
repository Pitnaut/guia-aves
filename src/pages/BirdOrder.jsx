import React from 'react'
import { birds } from '../data/data'
import { useParams, Link } from 'react-router-dom'
import '../stylesheets/BirdPage.css'
import BirdCard from '../components/BirdCard'


const BirdOrder = () => {
  const { orden } = useParams()
  const filteredBirds = birds.filter((bird) => bird.orden === orden)

  return (
  <div key={orden}  className='bird-order-container'>
    <h1>{orden}</h1>
    <div className='bird-order'>
      {filteredBirds.map((bird) => (
        <Link
          key={bird.nombre}
          to={`/birds/${bird.nombre}`}
          style={{ textDecoration: 'none' }}>
        <BirdCard key={bird.id} bird={bird} />
        </Link>
      ))}
    </div>
  </div>
  )
}

export default BirdOrder;