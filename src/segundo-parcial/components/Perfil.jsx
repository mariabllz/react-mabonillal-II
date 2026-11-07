export default function Perfil() {
  return (
    <section id="perfil" className="sp-hero" aria-labelledby="perfil-titulo">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7">
            <p className="sp-eyebrow">INGENIERÍA DE SISTEMAS · DESARROLLO WEB</p>
            <span className="badge text-bg-success mb-3">Disponible para prácticas profesionales</span>
            <h1 id="perfil-titulo" className="display-3 fw-bold mb-3">Sofía Vargas<br /><span className="text-primary">Ramírez.</span></h1>
            <p className="fs-4 fw-medium">Desarrolladora frontend en formación</p>
            <p className="lead text-secondary sp-readable">Transformo ideas en interfaces claras, accesibles y útiles. Me entusiasma conectar la ingeniería con las necesidades de las personas.</p>
            <div className="d-flex flex-wrap gap-3 my-4 small">
              <span><i className="bi bi-geo-alt text-primary me-2" aria-hidden="true" />Bogotá, Colombia</span>
              <a className="text-break" href="mailto:sofia.vargas@example.com"><i className="bi bi-envelope me-2" aria-hidden="true" />sofia.vargas@example.com</a>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href="#formacion">Conoce mi trayectoria <i className="bi bi-arrow-down-right ms-2" aria-hidden="true" /></a>
              <a className="btn btn-outline-dark btn-lg" href="mailto:sofia.vargas@example.com">Contactar</a>
            </div>
            <p className="small text-secondary mt-4 mb-0">Perfil ficticio para fines académicos · Fotografía ilustrativa</p>
          </div>
          <div className="col-12 col-lg-5">
            <figure className="sp-portrait mb-0 mx-auto">
              <img className="img-fluid w-100" width="600" height="700"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&h=700&q=85"
                alt="Retrato ilustrativo de una joven profesional" />
              <figcaption className="p-4 bg-white"><i className="bi bi-code-slash text-primary me-2" aria-hidden="true" /><strong>Código con propósito.</strong><span className="d-block small text-secondary mt-1">Curiosidad, criterio y aprendizaje continuo.</span></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
