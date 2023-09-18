import './Footer.css';

const Footer = () => {
  return <footer className='footer' style={{ backgroundImage: 'url(/img/footer.png)' }}>
    <div className='redes'>
      <a href='https://www.aluracursos.com'>
        <img src='/img/facebook.png' alt='Facebook'></img>
      </a>
      <a href='https://www.aluracursos.com'>
        <img src='/img/twitter.png' alt='Twitter'></img>
      </a>
      <a href='https://www.aluracursos.com'>
        <img src='/img/instagram.png' alt='Instagram'></img>
      </a>
    </div>
    <img src='/img/logo.png' alt='org'></img>
    <strong>Desarrollado por Ivanovicx Nuñez con Alura</strong>
  </footer>
}

export default Footer;