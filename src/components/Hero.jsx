
import "../styles/Hero.css"

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <p className="tag">
          DESARROLLO WEB Y SOLUCIONES DIGITALES EN URUGUAY
        </p>

        <h1>
          Diseño de páginas web para negocios en Uruguay.
          <span> Tecnología que se adapta a vos.</span>
        </h1>

        <p className="hero-description">
          Creamos páginas web profesionales, sistemas
          de reservas, herramientas de gestión y
          automatizaciones para emprendimientos,
          profesionales y comercios.

          Te ayudamos a llevar tu negocio al mundo
          digital con soluciones hechas a medida.
        </p>

        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">
            Pedí tu presupuesto →
          </a>

          <a href="#demos" className="btn-secondary">
            Ver nuestros proyectos
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
