import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Formulario from './components/Formulario/Formulario.jsx';
import MiOrg from './components/MiOrg/index.jsx';
import './App.css';

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  
  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  return (
    <div className="App">            
      <Header />    
      {mostrarFormulario && <Formulario />}      
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
