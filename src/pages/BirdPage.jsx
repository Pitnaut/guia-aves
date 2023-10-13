import React from 'react'
import { birds } from '../data/data'
import { useParams } from 'react-router-dom'
import '../stylesheets/BirdPage.css'
import BirdCard from '../components/BirdCard'

const BirdPage = () => {
  const { id } = useParams()
  const bird = birds.find((bird) => bird.id === parseInt(id))

  return (
    <div className=''>
      {bird ? (
        <div className='bird-list'>
          <div className='bird-container'>
            <BirdCard  bird={bird} />
          </div>
        </div>
      ) : (
        <p>No se encontró información del ave</p>
      )}
    </div>
  )
}

export default BirdPage