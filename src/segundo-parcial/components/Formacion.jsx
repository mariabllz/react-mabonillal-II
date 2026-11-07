export default function Formacion() {
  const estudios = [
    { titulo: 'Ingeniería de Sistemas', institucion: 'Universidad Horizonte de Bogotá',
      periodo: '2023 — 2027', estado: 'En curso', color: 'primary', icono: 'bi-mortarboard',
      detalle: 'Pregrado · Algoritmos, bases de datos y desarrollo de software.' },
    { titulo: 'Desarrollo web con React', institucion: 'Academia Código Abierto',
      periodo: '2026', estado: 'Certificación', color: 'success', icono: 'bi-patch-check',
      detalle: '120 horas · Componentes, estado, accesibilidad y Bootstrap.' },
    { titulo: 'Git y trabajo colaborativo', institucion: 'Centro Digital Andino',
      periodo: '2025', estado: 'Curso', color: 'warning', icono: 'bi-git',
      detalle: '40 horas · Versionado, ramas y revisión de código en GitHub.' },
  ];
  return (
    <section id="formacion" className="sp-section sp-soft" aria-labelledby="formacion-titulo">
      <div className="container">
        <p className="sp-eyebrow">02 / FORMACIÓN</p>
        <h2 id="formacion-titulo">Aprender para construir mejor.</h2>
        <p className="text-secondary mb-4">Una base sólida y la curiosidad de seguir creciendo.</p>
        <div className="row g-4">
          {estudios.map((estudio) => (
            <div className="col-12 col-md-6 col-lg-4" key={estudio.titulo}>
              <article className="card h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <i className={`bi ${estudio.icono} sp-icon bg-white text-primary`}
                      aria-hidden="true" />
                    <span className={`badge text-bg-${estudio.color}`}>{estudio.estado}</span>
                  </div>
                  <p className="small text-secondary mb-2">{estudio.periodo}</p>
                  <h3 className="h5">{estudio.titulo}</h3>
                  <p className="fw-medium small">{estudio.institucion}</p>
                  <p className="text-secondary small mb-0">{estudio.detalle}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
