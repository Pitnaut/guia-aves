import React, {useEffect} from 'react';
import logo from '../assets/logo.png';
import '../stylesheets/Home.css'

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home' >
      <img src={logo} />
      <h1>Bienvenido a la guía de Aves de Madrid</h1>
    </div>
  )
}
