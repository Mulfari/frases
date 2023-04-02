import frases from "./frases/fortuna.json";

function Fortuna() {
  const randomFrase = frases[Math.floor(Math.random() * frases.length)];
  const { quote, author } = randomFrase;

  return (
    <div>
      <p>{quote}</p>
      <p>- {author}</p>
    </div>
  );
}

export default Fortuna;
