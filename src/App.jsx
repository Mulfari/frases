import Header from './components/header'
import './App.css'
import Frase from './components/Frase';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="components-container">
        <Frase />
      </div>
    </div>
  );
}


export default App
