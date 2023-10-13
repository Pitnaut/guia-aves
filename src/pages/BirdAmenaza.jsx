import React from 'react'
import { birds } from '../data/data'
import { useParams } from 'react-router-dom'
import '../stylesheets/BirdPage.css'
import BirdCard from '../components/BirdCard'


const BirdAmenaza = () => {
  const { amenaza } = useParams()
  const filteredBirds = birds.filter((bird) => bird.amenaza === amenaza)

  return (
    <div className='bird-list'>
      {filteredBirds.map((bird) => (
        <BirdCard key={bird.id} bird={bird} />
      ))}
    </div>
  )
}

export default BirdAmenaza;