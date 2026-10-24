
function Footer() {
  const manejarEnvio = (e) => {
    e.preventDefault();
    alert('¡Mensaje de ejemplo enviado correctamente!');
    e.target.reset();
  };

  return (
    <footer id="contacto" className="container-fluid bg-dark text-white py-5">
      <div className="row px-4 px-md-5">
        <div className="col-12 col-md-5 mb-4">
          <h3 className="fw-bold text-warning">
            ¿Trabajamos juntos?
          </h3>

          <p className="text-light">
            Si tienes una propuesta laboral o un proyecto,
            puedes escribirme mediante el siguiente formulario.
          </p>

          <p>
            <strong>Correo:</strong> laura.martinez@example.com
          </p>

          <p>
            <strong>Ubicación:</strong> Bogotá, Colombia
          </p>

          <div className="d-flex gap-3 mt-4">
            <a
              href="https://github.com"
              className="text-white"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.23.49-2.7-1.08-2.7-1.08-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 4.88c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com"
              className="text-white"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.15C0 .52.53 0 1.18 0h13.64C15.47 0 16 .52 16 1.15v13.7c0 .63-.53 1.15-1.18 1.15H1.18C.53 16 0 15.48 0 14.85zM4.9 13.5V6.17H2.46v7.33zM3.68 5.17c.85 0 1.38-.57 1.38-1.28-.02-.73-.53-1.28-1.36-1.28s-1.38.55-1.38 1.28c0 .71.53 1.28 1.34 1.28zM13.5 13.5V9.35c0-2.22-1.18-3.26-2.76-3.26-1.27 0-1.84.7-2.16 1.2v-1.1H6.14c.03.7 0 7.31 0 7.31h2.44V9.41c0-.22.02-.44.08-.6.18-.44.59-.9 1.27-.9.9 0 1.27.68 1.27 1.67v3.92z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <h3 className="fw-bold mb-4">Formulario de contacto</h3>

          <form onSubmit={manejarEnvio}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre completo
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Escribe tu nombre"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="nombre@correo.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="mensaje"
                rows="4"
                placeholder="Escribe tu mensaje..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      <hr className="border-secondary mt-5" />

      <div className="text-center text-secondary">
        <p className="mb-0">
          © 2026 Laura Martínez Gómez | Hoja de vida de ejemplo
        </p>
      </div>
    </footer>
  );
}

export default Footer;
