import React, { useState } from "react";
import "./App.css";
import Espacio from "./components/Espacio";
import Celebre from "./components/Celebre";
import Fortuna from "./components/Fortuna";
import Header from "./components/Header";
import image1 from "./components/images/Espacio/image1.png";
import image2 from "./components/images/Espacio/image2.png";
import image3 from "./components/images/Espacio/image3.png";
import image4 from "./components/images/Espacio/image4.png";
import image5 from "./components/images/Espacio/image5.png";
import image6 from "./components/images/Espacio/image6.png";
import image7 from "./components/images/Espacio/image7.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./components/styles/transition.css";

function App() {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [currentComponent, setCurrentComponent] = useState("Espacio");

  const backgroundImageStyle = {
    backgroundImage: `url(${images[backgroundImageIndex]})`,
  };

  const showEspacio = () => {
    setCurrentComponent("Espacio");
  };

  const showCelebre = () => {
    setCurrentComponent("Celebre");
  };

  const showFortuna = () => {
    setCurrentComponent("Fortuna");
  };

  return (
    <div className="App" style={backgroundImageStyle}>
      <Header />
      <div className="buttons">
        <button onClick={showEspacio}>Espacio</button>
        <button onClick={showCelebre}>Celebre</button>
        <button onClick={showFortuna}>Fortuna</button>
      </div>
      <TransitionGroup>
        <CSSTransition key={currentComponent} classNames="fade" timeout={300}>
          <div>
            {currentComponent === "Espacio" && (
              <Espacio setBackgroundImageIndex={setBackgroundImageIndex} />
            )}
            {currentComponent === "Celebre" && <Celebre />}
            {currentComponent === "Fortuna" && <Fortuna />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
