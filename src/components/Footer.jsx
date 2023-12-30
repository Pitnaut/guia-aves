import React from 'react';
import BirdCounter from './BirdCounter';
import '../stylesheets/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='contador-aves'>
          <BirdCounter />
        </div>
        <div className='contact-container'>
          <h3>Contacto</h3>
          <a href="mailto:pitarevalo@gmail.com">Email 📧</a>
          <a href="tel:+34690318995">Teléfono 📞</a>
          <a href="https://www.linkedin.com/in/pedro-manuel-ar%C3%A9valo-gonz%C3%A1lez-140993147/" target="_blank">LinkedIn 📱</a>
          <a href="https://bsky.app/profile/pitnaut.bsky.social" target="_blank">Bluesky 🦋</a>
        </div>
        <div className='proyects-container'>
          <h3>Proyectos</h3>
          <a href="https://github.com/Pitnaut?tab=repositories" target="_blank">Github 🐈</a>
          <a href="https://pitnaut.github.io/portfolio/">Portfolio 💻</a>
          <a href="https://pit-todo-list.netlify.app/">To Do List ✏️</a>
          <a href="https://pitnaut.github.io/lottery/lottery.html">Lotería 💶</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;