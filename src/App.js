import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Formulario from './components/Formulario/Formulario.jsx';
import MiOrg from './components/MiOrg/index.jsx';
import Equipo from './components/Equipo/Equipo.jsx';
import './App.css';

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [colaboradores, setColaboradores] = useState([]);

  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  const registrarColaborador = (colaborador) => {
    
    // Spread Operator
    setColaboradores([...colaboradores, colaborador]);
  }

  const equipos = [
    {
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9'
    },
    {
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },
    {
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },
    {
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    }         
  ];

  return (
    <div className="App">
      <Header />

      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador} />}
      
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} />)}
    </div>
  );
}

export default App;
