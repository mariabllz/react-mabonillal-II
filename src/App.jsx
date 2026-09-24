import pollitoImg from './assets/pollito.jpg'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Hola, soy María</h1>
          <p>
            Este es mi primer proyecto con React
          </p>
          <p>
          Soy estudiante de ingeniería de sistemas de tercer semestre
          y estoy aprendiendo a crear proyectos con React.
          </p>
          <img src={pollitoImg} alt="Imagen pollito crochet" />
        </div>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
