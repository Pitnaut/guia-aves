import React, {useEffect} from "react";
import '../stylesheets/Guide.css';
import CN from '../assets/CN.png'
import CR from '../assets/CR.png'
import DD from '../assets/DD.png'
import LC from '../assets/LC.png'
import NT from '../assets/NT.png'
import VU from '../assets/VU.png'

const Guide = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="guide-container">
      <div className="intro-guide">
        <h1>Guía de uso</h1>
        <p>En este apartado te mostraremos como navegar a través de la app y a entender su funcionamiento. </p>
      </div>
      <div className="guide-navigator">
        <h2>Navegación</h2>
        <p>
          En <span style={{fontWeight: 'bold'}}>Todas las aves</span> encontrarás un listado con las 203 aves que aparecen en esta app ordenadas alfabéticamente. 
          Puedes pinchar en la que quieras para ver su información detallada.
        </p>
        <p>
          Si pulsas <span style={{fontWeight: 'bold'}}>filtrar</span> entrarás en un menú donde podrás buscar aves según cuatro criterios diferentes:
        </p>
        <p>
          <span style={{fontWeight: 'bold'}}>Orden:</span> Te mostrará un listado de aves en función de su orden taxonómico.
        </p>
        <p>
        <span style={{fontWeight: 'bold'}}>Nivel de amenaza:</span> Te mostrará un listado de aves según su nivel de amenaza. Esta información está disponible en el {' '}  
        <a href="https://seo.org/libro-rojo-2021/?gad_source=1&gclid=CjwKCAjw7-SvBhB6EiwAwYdCAdmY0JIzjQ4r-y4SqdmonkPOb4Ne_fEGzZ36WGQNSo63lyIy9OuiOxoCS7QQAvD_BwE#" 
           target="_blank" 
           rel="noopener noreferrer"
           style={{color: 'inherit', fontWeight: 'bold'}}>
            Libro Rojo de las Aves de España.</a>
        </p>
        <div className="amenaza-images">
          <img src={CN} alt="En peligro" />
          <img src={CR} alt="En peligro crítico" />
          <img src={VU} alt="Vulnerable" />
          <img src={NT} alt="Casi amenazado" />
          <img src={DD} alt="Datos insuficientes" />
          <img src={LC} alt="Preocupación menor" />
        </div>
        <p>
          <span style={{fontWeight: 'bold'}}>Estación:</span> Te mostrará un listado de aves según su estacionalidad.
        </p>
        <p>
          <span style={{fontWeight: 'bold'}}>Aves avistadas:</span> Aquí podrás filtrar por aves avistadas. Dentro del de detalle de cada ave podrás hacerlo pulsando un botón.
        </p>
      </div>
      <div className="guide-search">
        <h2>Buscador</h2>
        <p>
          En la <span style={{fontWeight: 'bold'}}>barra de navegación</span> encontrarás un buscador. Aquí podrás escribir el nombre del ave que quieras ver directamente en caso de que la conozcas.
        </p>
      </div>
      <div className="guide-birddetail">
        <h2>Detalles del ave</h2>
        <p>
          Ya sea dentro de "todas las aves", en cualquier filtro o en el buscador, si haces click en el ave, entrarás dentro de sus detalles. 
          Ahí podrás encontrar <span style={{fontWeight: 'bold'}}>información más detallada</span> y la opción de marcar como <span style={{fontWeight: 'bold'}}>avistada</span>.
        </p>
        <p>
          Si pulsas en <span style={{fontWeight: 'bold'}}>avistada</span> se marcará con una pequeña <span style={{fontWeight: 'bold'}}>medalla</span> y podrás verla cuando filtres por <span style={{fontWeight: 'bold'}}>Aves avistadas</span>.
        </p>
        <p>
          Además en la parte inferior de la página podrás ver una barra de progreso que te indicará el <span style={{fontWeight: 'bold'}}>avistamientos</span> que llevas.
        </p>
        <p>
          La información inlcuida en el detalle del ave incluye: <span style={{fontWeight: 'bold'}}>nombre científico, orden, familia, amenaza, estación, envergadura,alimentación y algunos datos interesantes.</span>
        </p>
        <p>
          Se inlcuye además el nombre del creador de la foto y un enlace a su <span style={{fontWeight: 'bold'}}>página o pérfil de Wikipedia / Flickr</span> para que puedas ver más fotos del autor.
        </p>
        <p>
          Finalmente tienes dos enlaces a <span style={{fontWeight: 'bold'}}>SEO/BirdLife</span> y <span style={{fontWeight: 'bold'}}>Wikipedia</span> para que puedas ampliar la información.
        </p>
      </div>
      <div className="guide-food">
        <h2>Alimentación</h2>
        <p>
          En los detalles del ave encontrarás una serie de imagenes que represntan la alimentación de las aves. A continuación te mostramos el significado de cada una:
        </p>
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          <li>🐝 Abejas</li>
          <li>🦗 Insectos</li>
          <li>🐀 Roedores</li>
          <li>🐇 Conejos</li>
          <li>🐦 Aves</li>           
          <li>🦎 Reptiles</li>
          <li>🐌 Moluscos</li>
          <li>🦀 Crustáceos</li>
          <li>🌾 Semillas</li>
          <li>🌿 Plantas</li>
          <li>🍇 Frutos</li>
          <li>🐸 Anfibios</li>
          <li>🐟 Peces</li>
          <li>🦴 Carroña</li>
          <li>🐛 Lombrices</li>
          <li>🌰 Castañas</li>
          <li>🥚 Huevos</li>
          <li>🗑️ Basura</li>
          <li>🐤 Polluelos</li>
        </ul>  
      </div>
      <div className="guide-progress">
        <h2>Progreso</h2>
        <p>
          En la parte inferior de la página, encontrarás una barra de progreso que te indicará el número de aves avistadas así como el porcentaje completado.
        </p>
        <p>
          Si pulsas en <span style={{fontWeight: 'bold'}}>Resetear</span> tu progreso se pondrá a 0 y tendrás que volver a marcar las aves que ya has visto.
        </p>
      </div>
      <div className="guide-footer">
        <h2>Contacto</h2>
        <p>
          Tienes toda la información de contacto en el <span style={{fontWeight: 'bold'}}>footer</span> de la app. Si tienes alguna duda o sugerencia no dudes en ponerte en contacto.
        </p>
        <p>
          La última parte del footer incluye enlaces a <span style={{fontWeight: 'bold'}}>otros proyectos personales</span> además de un link a <span style={{fontWeight: 'bold'}}>Github </span>donde podrás ver el código de todos ellos incluido el de esta App.
        </p>
        <p>
          Muchísimas gracias por visitar la app y espero que te haya sido de utilidad. ¡Disfruta de la naturaleza! 🌳🐦
        </p>
      </div>
    </div>
  )
}

export default Guide;
