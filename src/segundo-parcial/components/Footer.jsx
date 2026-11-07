export default function Footer() {
  return (
    <footer className="sp-footer py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-7">
            <p className="small sp-muted mb-2">SIGAMOS CONSTRUYENDO</p>
            <h2 className="h3">Las buenas ideas empiezan con una conversación.</h2>
            <a href="mailto:sofia.vargas@example.com" className="d-inline-block mt-2">
              <i className="bi bi-envelope me-2" aria-hidden="true" />Escríbeme
            </a>
          </div>
          <div className="col-12 col-md-5 text-md-end">
            <p className="small sp-muted">Explora estas comunidades tecnológicas</p>
            <div className="d-flex gap-4 justify-content-md-end">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github me-2" aria-hidden="true" />GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin me-2" aria-hidden="true" />LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-top border-secondary mt-4 pt-4 small sp-muted">
          <div className="d-flex flex-wrap justify-content-between gap-2">
            <span>© {new Date().getFullYear()} Sofía Vargas Ramírez · Hecho con dedicación.</span>
            <a href="#perfil">Volver arriba <i className="bi bi-arrow-up" aria-hidden="true" /></a>
          </div>
          <p className="mb-0 mt-2">Ejercicio académico: datos e instituciones ficticios.
            Los enlaces sociales llevan a las plataformas, no a perfiles personales.</p>
        </div>
      </div>
    </footer>
  );
}
