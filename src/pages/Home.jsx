import React, {useEffect} from 'react';
import logo from '../assets/logo.png';
import petirrojo from '../assets/Petirrojo_europeo.png';
import '../stylesheets/Home.css'

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className='home' >
        <h2>Bienvenido a la guía de Aves de Madrid</h2>
        <div className='intro-logo'>      
          <img src={logo} />
          <p>En esta app podrás buscar información básica sobre las aves que habitan en la Comunidad de Madrid.</p>
        </div>
        <div className='main-text'>
          <p>
            En esta guía no oficial con las principales aves que habitan la Comunidad de Madrid,
            tendrás una información sencilla sobre cada ave.
          </p>
          <img src={petirrojo} />
        </div>
        <div className='big-text'>
          <p>
            Si quieres saber más sobre alguna especie, puedes visitar la web de SEO Birdlife o Wikipedia, donde encontrarás información más detallada.
          </p>
          <p>Si tienes alguna duda sobre como se usa esta app, tienes dentro de 'Guía de uso' las instrucciones y la leyenda que aparece en los detalles del ave.</p>
          <p>En caso de encontrar algún error o sencillamente tienes una sugerencia sobre como mejorar puedes ponerte en contacto en el correo proporcionado en el footer.</p>
          <p>Esta aplicación es totalmente gratuita y forma parte de un proyecto educativo personal. Se han dado crédito a los autores de las fotos.</p>
        </div>
      </div>
  )
}
