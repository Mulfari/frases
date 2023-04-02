import { useState, useEffect } from "react";
import frases from "./frases/celebres.json";

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
    <div>
      <p>{fraseActual.quote}</p>
      <p>- {fraseActual.author}</p>
      <button onClick={mostrarSiguienteFrase}>Siguiente</button>
      <button onClick={mostrarFraseAnterior}>Anterior</button>
    </div>
  );
}

export default Celebres;
