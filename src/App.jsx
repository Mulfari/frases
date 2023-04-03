import Celebres from './components/Celebres'
import Fortuna from './components/Fortuna'
import Espacio from './components/Espacio'
import Header from './components/header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="components-container">
        <Celebres />
        <Espacio />
        <Fortuna />
      </div>
    </div>
  );
}


export default App
