import React, {useEffect} from "react";
import '../stylesheets/Guide.css';

const Guide = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="guide-container">
      <h1>Guía de uso</h1>
    </div>
  )
}

export default Guide;
