import "./App.css"
import logoBit from "./assets/logo-bit.jpeg"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { useForm } from "@formspree/react"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logoBit}
          alt="Bit Solutions logo"
          className="logo-img"
        />
      </div>

      <div className="nav-links">
        <a href="#inicio">Inicio</a>

        <a href="#servicios">Servicios</a>

        <a
          href="#nosotros"
          onClick={(e) => {
            e.preventDefault()

            const section = document.getElementById("nosotros")

            const posicion =
              section.getBoundingClientRect().bottom +
              window.scrollY - 700

            window.scrollTo({
              top: posicion,
              behavior: "smooth"
            })
          }}
        >
          Nosotros
        </a>

        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <p className="tag">SOLUCIONES DIGITALES</p>

        <h1>
          Soluciones digitales que hacen
          <span> crecer negocios.</span>
        </h1>

        <p className="hero-description">
          Creamos páginas web modernas, automatizaciones y herramientas
          digitales pensadas para potenciar tu negocio.
        </p>

        <a href="#contacto" className="btn-primary">
          Quiero mi proyecto
        </a>
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

function Services() {
  return (
    <section className="section" id="servicios">
      <div className="section-header">
        <p className="tag">SERVICIOS</p>
        <h2>¿Qué podemos hacer por tu negocio?</h2>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="icon">🌐</div>
          <h3>Páginas web</h3>
          <p>
            Sitios modernos, rápidos y adaptados a celular para mostrar tu
            negocio de forma profesional.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">⚙️</div>
          <h3>Automatizaciones</h3>
          <p>
            Simplificamos tareas repetitivas para ayudarte a ahorrar tiempo y
            trabajar mejor.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📊</div>
          <h3>Datos y dashboards</h3>
          <p>
            Transformamos información en reportes claros para ayudarte a tomar
            mejores decisiones.
          </p>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about-left">
        <p className="tag">BIT SOLUTIONS</p>
        <h2>Tecnología pensada para negocios reales.</h2>
      </div>

      <div className="about-right">
        <p>
          En Bit Solutions creemos que la tecnología tiene que hacer las cosas
          más simples, no más complicadas.
        </p>

        <p>
          Creamos soluciones digitales para ayudar a negocios y emprendimientos
          a mejorar su presencia online, optimizar procesos y trabajar de forma
          más eficiente.
        </p>

        <p>
          Cada proyecto se adapta a las necesidades reales de cada cliente,
          combinando diseño, funcionalidad y tecnología en herramientas
          modernas, prácticas y pensadas para crecer.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  const [state, handleSubmit] = useForm("mvkzzzpz")
  return (
    <section className="contact" id="contacto">
      <h2 className="contact-title">¿Tenés una idea?</h2>

      <p className="contact-description">
        Contanos qué necesitás y vemos juntos cuál es la mejor solución para tu negocio.
      </p>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Teléfono / WhatsApp</label>
          <input
            type="tel"
            name="telefono"
            placeholder="Ej: 099 123 456"
            required
          />
        </div>

        <div className="form-group">
          <label>Instagram del negocio</label>
          <input
            type="text"
            name="instagram"
            placeholder="@tunegocio (opcional)"
          />
        </div>

        <div className="form-group">
          <label>Contanos tu idea</label>
          <textarea
            name="idea"
            placeholder="Contanos qué necesitás..."
            rows="5"
            required
          ></textarea>
        </div>

          <button
            type="submit"
            className="btn-submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Enviando..." : "Enviar consulta"}
          </button>
            {state.succeeded && (
              <p className="form-success">
                ¡Consulta enviada correctamente! 🚀
              </p>
            )}
      </form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>Bit Solutions</strong>
        <p>Soluciones digitales para tu negocio.</p>
      </div>

      <div className="footer-socials">

        <a
          href="https://wa.me/59892730842"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://instagram.com/bitsolutionsuy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

      </div>

      <p className="footer-copy">© 2026 Bit Solutions</p>
    </footer>
  )
}
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App