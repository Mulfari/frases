import React, { useState, useEffect } from "react";
import frases from "./frases/espacio.json";
import styles from "./styles/Espacio.css";

function Espacio() {
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
        <p>{fraseActual.quote}</p>
        <p>- {fraseActual.author}</p>
      </div>
      <div className="buttons">
        <button onClick={mostrarSiguienteFrase} className={styles.button}>
          Siguiente
        </button>
        <button onClick={mostrarFraseAnterior} className={styles.button}>
          Anterior
        </button>
      </div>
    </div>
  );
}

export default Espacio;
