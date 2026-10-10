import "../styles/Hero.css"

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <p className="tag">DESARROLLO WEB Y SOLUCIONES DIGITALES</p>

        <h1>
          Tu negocio tiene su forma de trabajar.
          <span> Creamos tecnología que se adapta a ella.</span>
        </h1>

        <p className="hero-description">
          Diseñamos páginas web, sistemas de reservas,
          herramientas de gestión y automatizaciones
          para que tu negocio ahorre tiempo, se organice
          mejor y siga creciendo.
        </p>

        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">
            Contanos tu idea →
          </a>

          <a href="#demos" className="btn-secondary">
            Explorar demos
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="browser-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="mockup-content">
          <p>BIT SOLUTIONS</p>
          <h2>Tu negocio en su mejor versión.</h2>
          <div className="fake-button">Empezar</div>
        </div>
      </div>
    </section>
  )
}

export default Hero