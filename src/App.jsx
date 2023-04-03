import './App.css'
import Celebres from './components/Celebres'
import Fortuna from './components/Fortuna'
import Espacio from './components/espacio'

function App() {
  return (
    <div className="App">
      <div className="components-container">
        <Celebres />
        <Espacio />
        <Fortuna />
      </div>
    </div>
  );
}


export default App
