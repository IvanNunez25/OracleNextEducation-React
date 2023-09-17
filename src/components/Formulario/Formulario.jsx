import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto.jsx';
import ListaOpciones from '../ListaOpciones/ListaOpciones.jsx';
import Boton from '../Boton/Boton.jsx';

const Formulario = () => {

    const manejarEnvio = (event) => {
        event.preventDefault();        
        console.log("Manejar el envío", event);
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required />
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required />
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" />
            <ListaOpciones />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Formulario;