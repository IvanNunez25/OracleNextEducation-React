import { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto.jsx';
import ListaOpciones from '../ListaOpciones/ListaOpciones.jsx';
import Boton from '../Boton/Boton.jsx';

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEnvio = (event) => {
        event.preventDefault();        
        let datos = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datos);
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={setNombre} />
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={setPuesto} />
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" valor={foto} actualizarValor={setFoto} />
            <ListaOpciones valor={equipo} actualizarValor={setEquipo} />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Formulario;