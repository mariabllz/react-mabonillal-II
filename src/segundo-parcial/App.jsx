import Navbar from './components/Navbar.jsx';
import Perfil from './components/Perfil.jsx';
import SobreMi from './components/SobreMi.jsx';
import Formacion from './components/Formacion.jsx';
import Habilidades from './components/Habilidades.jsx';
import Footer from './components/Footer.jsx';
import './segundo-parcial.css';

export default function App() {
  return (
    <div className="segundo-parcial container-fluid p-0" lang="es">
      <title>Sofía Vargas Ramírez | Hoja de vida</title>
      <a className="sp-skip" href="#contenido">Saltar al contenido</a>
      <header><Navbar /></header>
      <main id="contenido" tabIndex={-1} className="row g-0">
        <div className="col-12"><Perfil /></div>
        <div className="col-12"><SobreMi /></div>
        <div className="col-12"><Formacion /></div>
        <div className="col-12"><Habilidades /></div>
      </main>
      <Footer />
    </div>
  );
}
