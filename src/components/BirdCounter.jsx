import React, { useContext } from "react";
import { BirdContext } from "./BirdContext";

const BirdCounter = () => {
  const { seenBird } = useContext(BirdContext);  

  const birdCount = seenBird.length;
  const totalBirds = 203;
  const progress = (birdCount / totalBirds) * 100;

  return (
    <div className="bird-counter">
      <p className="bird-counter-text">{birdCount} de 203 aves avistadas</p>
      <progress value={birdCount} max={totalBirds}></progress>
      <p>{progress.toFixed(2)}%</p>
    </div>
  )
};

export default BirdCounter;