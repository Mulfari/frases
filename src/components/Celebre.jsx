import React, { useState, useEffect } from "react";
import frases from "./frases/celebre.json";
import "./styles/Celebre.css";

function Celebre({ setBackgroundImageIndex }) {
  const [visible, setVisible] = useState(false);
  const [fraseActualIndex, setFraseActualIndex] = useState(
    Math.floor(Math.random() * frases.length)
  );
  const fraseActual = frases[fraseActualIndex];

  const cambiarFondo = () => {
    setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % 7);
  };

  const cambiarFondoAnterior = () => {
    setBackgroundImageIndex((prevIndex) => (prevIndex - 1 + 7) % 7);
  };

  const mostrarSiguienteFrase = () => {
    setFraseActualIndex((fraseActualIndex + 1) % frases.length);
    cambiarFondo();
  };

  const mostrarFraseAnterior = () => {
    setFraseActualIndex((fraseActualIndex - 1 + frases.length) % frases.length);
    cambiarFondoAnterior();
  };

  useEffect(() => {
    setFraseActualIndex(Math.floor(Math.random() * frases.length));
  }, []);


useEffect(() => {
  setVisible(false);
  const timeout = setTimeout(() => setVisible(true), 100);
  return () => clearTimeout(timeout);
}, [fraseActualIndex]);

  return (
    <div className="container">
      <div className="quote">
        <p className={`quoteText ${visible ? 'visible' : ''}`}>{fraseActual.quote}</p>
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

export default Celebre;
