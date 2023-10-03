import React from 'react'
import { birds } from '../data/data'
import { useParams } from 'react-router-dom'
import '../stylesheets/BirdPage.css'

const BirdPage = () => {

  const { id } = useParams()
  const bird = birds.find((bird) => bird.id === parseInt(id))

  return (
    <div className='bird-list'>
      <div key={bird.id} className='bird-container'>
          <img 
            className="bird-image"
            src={`../../public/images/${bird.imagen}.png`} 
            alt={bird.alttext} />
            <h2>{bird.nombre}</h2>
      </div>
    </div>
  )
}

export default BirdPage