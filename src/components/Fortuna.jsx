import React, { useState, useEffect } from "react";
import frases from "./frases/fortuna.json";
import "./styles/Fortuna.css";

function Fortuna() {
  const [fraseActualIndex, setFraseActualIndex] = useState(
    Math.floor(Math.random() * frases.length)
  );
  const fraseActual = frases[fraseActualIndex];

  const mostrarSiguienteFrase = () => {
    setFraseActualIndex((fraseActualIndex + 1) % frases.length);
  };

  const mostrarFraseAnterior = () => {
    setFraseActualIndex((fraseActualIndex - 1 + frases.length) % frases.length);
  };

  useEffect(() => {
    setFraseActualIndex(Math.floor(Math.random() * frases.length));
  }, []);

  return (
    <div className="container">
      <div className="quote">
        <p className="quoteTitle">Frases de Fortuna</p>
        <p className="quoteText">{fraseActual.phrase}</p>
        <p className="author">- {fraseActual.author}</p>
      </div>
      <div className="buttons">
        <button onClick={mostrarSiguienteFrase} className="button">
          Siguiente
        </button>
        <button onClick={mostrarFraseAnterior} className="button">
          Anterior
        </button>
      </div>
    </div>
  );  
}

export default Fortuna;
