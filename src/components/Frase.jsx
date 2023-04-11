import React, { useState } from "react";
import imagenes from "./imagenes.js";
import "./styles/Estilos.css";

const Frases = ({ frases }) => {
  const [index, setIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(imagenes[0]);

  const siguienteFrase = () => {
    const newIndex = index === frases.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
    setBackgroundImage(imagenes[newIndex % imagenes.length]);
  };

  const anteriorFrase = () => {
    const newIndex = index === 0 ? frases.length - 1 : index - 1;
    setIndex(newIndex);
    setBackgroundImage(imagenes[newIndex % imagenes.length]);
  };

  return (
    <div
      className="frases-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="frases-content">
        <p className="frase">{frases[index]}</p>
        <div className="frases-buttons">
          <button onClick={anteriorFrase}>Anterior</button>
          <button onClick={siguienteFrase}>Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default Frases;
