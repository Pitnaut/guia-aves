import React from 'react'
import { birds } from '../data/data'
import { useParams, Link } from 'react-router-dom'
import '../stylesheets/BirdPage.css'
import BirdCard from '../components/BirdCard'

const BirdPage = () => {
  const { id } = useParams()
  const bird = birds.find((bird) => bird.id === parseInt(id))

  return (
    <div className='search-page'>
      {bird ? (
        <div className='bird-list'>
          <Link to={`/bird/${id}`}>
            <BirdCard bird={bird} />
          </Link>
        </div>
      ) : (
        <p>No se encontró información del ave</p>
      )}
    </div>
  )
}

export default BirdPage