export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-white border-bottom py-3" aria-label="Navegación principal">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#perfil">
          <span className="sp-monogram me-2">SV</span> Sofía Vargas<span className="text-primary">.</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#menuParcial" aria-controls="menuParcial" aria-expanded="false" aria-label="Abrir navegación">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="menuParcial">
          <ul className="navbar-nav ms-auto gap-md-3">
            {[
              ['perfil', 'Perfil'], ['sobre-mi', 'Sobre mí'],
              ['formacion', 'Formación'], ['habilidades', 'Habilidades'],
            ].map(([id, label]) => (
              <li className="nav-item" key={id}>
                <a className="nav-link" href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn-outline-primary ms-md-4 mt-3 mt-md-0" href="mailto:sofia.vargas@example.com">
            Hablemos <i className="bi bi-arrow-up-right ms-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  );
}
