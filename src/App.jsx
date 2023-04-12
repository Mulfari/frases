import React, { useState } from "react";
import "./App.css";
import Frase from "./components/Frase";
import image1 from "./components/images/image1.png";
import image2 from "./components/images/image2.png";
import image3 from "./components/images/image3.png";
import image4 from "./components/images/image4.png";
import image5 from "./components/images/image5.png";
import image6 from "./components/images/image6.png";
import image7 from "./components/images/image7.png";

function App() {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[backgroundImageIndex]})`,
  };

  return (
    <div className="App" style={backgroundImageStyle}>
      <Frase setBackgroundImageIndex={setBackgroundImageIndex} />
    </div>
  );
}

export default App;
