import React, { createContext, useState, useEffect } from "react";

export const BirdContext = createContext();

export const BirdProvider = ({ children }) => {
  const [seenBird, setSeenBird] = useState(() => {
    const localData = localStorage.getItem('seenBird');
    try {
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Error parsing JSON from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('seenBird', JSON.stringify(seenBird));
  }, [seenBird]);

  const markAsSeen = (nombre) => {
    setSeenBird((prevSeenBird) => {
      if (prevSeenBird.includes(nombre)) {
        return prevSeenBird.filter((bird => bird !== nombre) )
      } else {
        return [...prevSeenBird, nombre]
      }
    });
  };
  return (
    <BirdContext.Provider value={{ seenBird, markAsSeen}}>
      {children}
    </BirdContext.Provider>
  )
};