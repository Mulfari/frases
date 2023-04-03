import './App.css'
import Celebres from './components/Celebres'
import Fortuna from './components/Fortuna'
import Espacio from './components/espacio'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generador de frases</h1>
      </header>
      <main className="App-main">
        <div className="component-row">
          <div className="component-container">
            <Celebres />
          </div>
          <div className="component-container">
            <Espacio />
          </div>
          <div className="component-container">
            <Fortuna />
          </div>
        </div>
      </main>
    </div>
  );  
}

export default App
