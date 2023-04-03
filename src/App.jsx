import Celebres from './components/Celebres'
import Fortuna from './components/Fortuna'
import Espacio from './components/Espacio'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="title1">Quote machine</h1>
      <div className="components-container">
        <Celebres />
        <Espacio />
        <Fortuna />
      </div>
    </div>
  );
}


export default App
