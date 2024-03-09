import React, { useContext } from "react";
import { BirdContext } from "./BirdContext";

const BirdCounter = () => {
  const { seenBird, resetBirdCount } = useContext(BirdContext);  

  const birdCount = seenBird.length;
  const totalBirds = 203;
  const progress = (birdCount / totalBirds) * 100;

  return (
    <div className="bird-counter">
      <h3>Progreso</h3>
      <p className="bird-counter-text">{birdCount} de 203 avistamientos</p>
      <div className="progress-bar">
        <progress value={birdCount} max={totalBirds}></progress>
        <div className="progress-text">{progress.toFixed(2)}%</div>
      </div>
      <button onClick={resetBirdCount}>Resetear</button>
    </div>
  )
};

export default BirdCounter;