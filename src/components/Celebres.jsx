import React, { useState, useEffect } from "react";
import frases from "./frases/Celebres.json";

function Celebres() {
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
    // Si el índice de la frase actual cambia, se vuelve a renderizar el componente
    // para mostrar la nueva frase
    setFraseActualIndex(Math.floor(Math.random() * frases.length));
  }, []);

  return (
    <div className="container">
      <div className="quote">
        <p className="quoteTitle">Frase célebre</p>
        <p className="quoteText">{fraseActual.quote}</p>
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

export default Celebres;
