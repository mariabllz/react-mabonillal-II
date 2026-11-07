export default function Habilidades() {
  const tecnicas = [
    ['HTML y CSS', 90, 'primary'], ['JavaScript', 80, 'success'],
    ['React y Bootstrap', 75, 'primary'], ['Git y GitHub', 80, 'warning'],
  ];
  const blandas = [
    ['Comunicación', 'Avanzado'], ['Trabajo en equipo', 'Avanzado'],
    ['Resolución de problemas', 'Intermedio'], ['Gestión del tiempo', 'Intermedio'],
  ];
  return (
    <section id="habilidades" className="sp-section" aria-labelledby="habilidades-titulo">
      <div className="container">
        <p className="sp-eyebrow">03 / HABILIDADES</p>
        <h2 id="habilidades-titulo">Herramientas y forma de trabajar.</h2>
        <p className="text-secondary mb-4">Autoevaluación orientativa de mi aprendizaje.</p>
        <div className="row g-5">
          <div className="col-12 col-lg-7">
            <h3 className="h5 mb-4">Competencias técnicas</h3>
            {tecnicas.map(([nombre, nivel, color]) => (
              <div className="mb-4" key={nombre}>
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-medium">{nombre}</span><span>{nivel}%</span>
                </div>
                <div className="progress" role="progressbar" aria-label={nombre}
                  aria-valuenow={nivel} aria-valuemin={0} aria-valuemax={100}>
                  <div className={`progress-bar bg-${color}`} style={{ width: `${nivel}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 col-lg-5">
            <div className="card sp-soft h-100"><div className="card-body p-4">
              <h3 className="h5 mb-4">Habilidades humanas</h3>
              <ul className="list-unstyled mb-4">
                {blandas.map(([nombre, nivel]) => (
                  <li key={nombre} className="d-flex flex-wrap gap-2 justify-content-between mb-3">
                    <span>{nombre}</span><span className="badge text-bg-light border">{nivel}</span>
                  </li>
                ))}
              </ul>
              <span className="badge text-bg-danger">En aprendizaje</span>
              <p className="small text-secondary mt-2 mb-0">Pruebas automatizadas con Vitest y TypeScript.</p>
            </div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
