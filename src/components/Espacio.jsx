import frases from "./frases/espacio.json";

function Espacio() {
  const randomFrase = frases[Math.floor(Math.random() * frases.length)];
  const { quote, author } = randomFrase;

  return (
    <div>
      <p>{quote}</p>
      <p>- {author}</p>
    </div>
  );
}

export default Espacio;
