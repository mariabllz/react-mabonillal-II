import pollitoImg from './assets/pollito.jpg'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div>
          <div className="presentacion">
            <h1>Miloop Crochet</h1>
          <p>
            El crochet es mi hobby favorito y también se convirtió en un pequeño emprendimiento.
          </p>
          <p>
          En Miloop Crochet encontrarás amigurumis, llaveros 
          y otras pequeñas creaciones tejidas a mano.
          </p>

          <img src={pollitoImg} alt="Imagen pollito crochet" /></div>

          <h2 className="titulo-creaciones">Lo que hago</h2>

          <div className="creaciones">

            <div>
              <h3>Amigurumis</h3>
            <p>Animalitos y personajes tejidos a mano</p>
            </div>

            <div>
              <h3>Llaveros</h3>
            <p>Pequeños detalles para llevar contigo</p>
            </div>

            <div>
              <h3>Detalles Personalizados</h3>
            <p>Creaciones especiales para regalar</p>
            </div>
            </div>
            </div>
      </section>
          
          

    
    </>
  )
}

export default App
