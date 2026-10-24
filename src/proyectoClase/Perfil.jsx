
function Perfil() {
  return (
    <section id="perfil">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <a className="navbar-brand fw-bold" href="#perfil">
          Mi Hoja de Vida
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Mostrar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#perfil">Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#titulos">Títulos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid bg-light py-5">
        <div className="row align-items-center px-3 px-md-5">
          <div className="col-12 col-md-4 text-center mb-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
              alt="Retrato de perfil"
              className="img-fluid rounded-circle border border-4 border-warning shadow"
              style={{
                width: '240px',
                height: '240px',
                objectFit: 'cover'
              }}
            />
          </div>

          <div className="col-12 col-md-8">
            <span className="badge bg-warning text-dark mb-3">
              PERFIL PROFESIONAL
            </span>

            <h1 className="display-5 fw-bold text-primary">
              Laura Martínez Gómez
            </h1>

            <h4 className="text-secondary">
              Diseñadora web y desarrolladora frontend
            </h4>

            <p className="lead mt-3">
              Soy una profesional creativa, responsable y apasionada
              por la tecnología. Me interesa crear sitios web modernos,
              accesibles y fáciles de utilizar.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-3">
              <span className="badge bg-success fs-6">
                Trabajo en equipo
              </span>
              <span className="badge bg-danger fs-6">
                Creatividad
              </span>
              <span className="badge bg-primary fs-6">
                React y Bootstrap
              </span>
            </div>

            <a href="#contacto" className="btn btn-primary mt-4">
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
