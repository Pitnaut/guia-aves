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
      </div>
    </footer>
  )
}

export default Footer;