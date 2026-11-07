export default function SobreMi() {
  const fortalezas = [
    ['bi-lightbulb', 'Curiosidad', 'Investigo, pruebo y aprendo de cada reto.'],
    ['bi-people', 'Colaboración', 'Escucho y construyo soluciones en equipo.'],
    ['bi-check2-circle', 'Compromiso', 'Cuido los detalles y cumplo acuerdos.'],
  ];
  return (
    <section id="sobre-mi" className="sp-section" aria-labelledby="sobre-titulo">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-12 col-lg-5">
            <p className="sp-eyebrow">01 / SOBRE MÍ</p>
            <h2 id="sobre-titulo">La tecnología empieza<br />por las personas.</h2>
          </div>
          <div className="col-12 col-lg-7 text-secondary">
            <p>Soy estudiante de Ingeniería de Sistemas. Disfruto entender un problema,
              organizar sus ideas y convertirlas en experiencias web fáciles de usar.</p>
            <p>Mi objetivo es iniciar mi carrera en un equipo de desarrollo frontend,
              aportar con React y seguir creciendo en accesibilidad y calidad de software.</p>
            <p className="mb-0"><strong className="text-dark">Mis intereses:</strong>{' '}
              diseño de interfaces, educación digital, lectura y senderismo.</p>
          </div>
        </div>
        <div className="row g-4">
          {fortalezas.map(([icono, titulo, descripcion]) => (
            <div className="col-12 col-md-4" key={titulo}>
              <article className="border-top pt-4">
                <i className={`bi ${icono} text-primary fs-3`} aria-hidden="true" />
                <h3 className="h5 mt-3">{titulo}</h3>
                <p className="text-secondary mb-0">{descripcion}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
