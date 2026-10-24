
function Titulos() {
  return (
    <section id="titulos" className="container-fluid py-5 px-4">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold text-primary">
          Formación académica
        </h2>
        <p className="text-secondary">
          Mis estudios, certificaciones y cursos complementarios.
        </p>
      </div>

      <div className="row g-4 px-md-3">
        <div className="col-12 col-md-4">
          <div className="card h-100 border-success shadow-sm">
            <div className="card-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-mortarboard-fill text-success mb-3"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M8.211.5a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 0 .908L2.5 6.01v2.257c0 .819.393 1.55 1.002 2.036C4.24 10.89 5.918 11.5 8 11.5s3.76-.61 4.498-1.197A2.5 2.5 0 0 0 13.5 8.267V6.01l1.211-.566a.5.5 0 0 0 0-.908z" />
                <path d="M5.065 11.31a1 1 0 0 1-.565-.894v-.001C5.52 10.8 6.72 11.1 8 11.1s2.48-.3 3.5-.685v.001a1 1 0 0 1-.565.894C10.24 11.79 9.2 12.1 8 12.1s-2.24-.31-2.935-.79" />
                <path d="M14 5.5v4.75a.75.75 0 0 0 1.5 0V5.5z" />
              </svg>

              <h5 className="card-title fw-bold">
                Ingeniería de Sistemas
              </h5>
              <p className="card-text">
                Universidad Tecnológica del Norte
              </p>
              <p className="text-secondary">
                2021 - 2025
              </p>
              <span className="badge bg-success">
                Finalizado
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 border-primary shadow-sm">
            <div className="card-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-primary mb-3"
                aria-hidden="true"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4 4h8v1H4zm0 3h8v1H4zm0 3h5v1H4z" />
              </svg>

              <h5 className="card-title fw-bold">
                Desarrollo Frontend
              </h5>
              <p className="card-text">
                Academia Digital Creativa
              </p>
              <p className="text-secondary">
                2025
              </p>
              <span className="badge bg-success">
                Certificado
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 border-warning shadow-sm">
            <div className="card-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-warning mb-3"
                aria-hidden="true"
              >
                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 3a.5.5 0 0 1 .5.5v3.25l2 1.2a.5.5 0 1 1-.5.86l-2.25-1.35A.5.5 0 0 1 7.5 8V4.5A.5.5 0 0 1 8 4" />
              </svg>

              <h5 className="card-title fw-bold">
                Diseño UX/UI
              </h5>
              <p className="card-text">
                Curso de experiencia de usuario
              </p>
              <p className="text-secondary">
                2026
              </p>
              <span className="badge bg-warning text-dark">
                En curso
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Titulos;
