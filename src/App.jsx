import "./App.css"
import logoBit from "./assets/logo-bit.jpeg"
import {FaWhatsapp, FaInstagram, FaGlobe, FaLaptopCode, FaCogs, FaChartBar} from "react-icons/fa"
import {FaCalendarAlt, FaShoppingBag, FaCalculator, FaUsers, FaCreditCard, FaClipboardList, FaBoxOpen, FaChartLine} from "react-icons/fa"
import { useForm } from "@formspree/react"
import { useEffect, useState } from "react"
import PeluqueriaDemo from "./demos/peluqueria/PeluqueriaDemo"

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

  <a href="#funcionalidades">Soluciones</a>

  <a href="#demos">Demos</a>

  <a href="#nosotros">Nosotros</a>

  <a href="#contacto" className="nav-contact">
    Contacto
  </a>
</div>

    </nav>
  )
}

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

function Services() {
  return (
    <section className="section" id="servicios">

      <div className="section-header">
        <p className="tag">NUESTROS SERVICIOS</p>

        <h2>¿Qué podemos crear para tu negocio?</h2>

        <p className="services-intro">
          Desde una página web para mostrar lo que hacés
          hasta herramientas digitales para simplificar
          tu trabajo.
        </p>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-icon">
            <FaGlobe />
          </div>

          <h3>Páginas web</h3>

          <p>
            Mostrá tu negocio, productos y servicios
            con una web moderna, profesional y
            adaptada a cualquier dispositivo.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaLaptopCode />
          </div>

          <h3>Sistemas a medida</h3>

          <p>
            Desarrollamos sistemas de reservas,
            gestión de clientes, pedidos y herramientas
            adaptadas a tu forma de trabajar.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaCogs />
          </div>

          <h3>Automatizaciones</h3>

          <p>
            Simplificamos tareas repetitivas y
            procesos manuales para que puedas
            ahorrar tiempo y enfocarte en tu negocio.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaChartBar />
          </div>

          <h3>Datos y dashboards</h3>

          <p>
            Transformamos tus datos en reportes
            y paneles visuales que te ayudan
            a entender mejor tu negocio.
          </p>
        </div>

      </div>

      <p className="services-note">
        Cada solución se adapta a las necesidades
        y objetivos de tu negocio.
      </p>

    </section>
  )
}


function HowWeWork() {

  const pasos = [
    {
      titulo: "Nos contás tu idea",
      descripcion: "Conocemos tu negocio, cómo trabajás y qué te gustaría mejorar."
    },
    {
      titulo: "Armamos una propuesta",
      descripcion: "Definimos las funcionalidades, el presupuesto y los tiempos del proyecto."
    },
    {
      titulo: "Desarrollamos tu solución",
      descripcion: "Construimos la herramienta y te mostramos los avances."
    },
    {
      titulo: "Ponemos todo en marcha",
      descripcion: "Probamos, publicamos y te explicamos cómo utilizar tu proyecto."
    }
  ]

  return (
    <section className="section process-section" id="proceso">

      <div className="section-header">
        <p className="tag">NUESTRO PROCESO</p>

        <h2>De tu idea a una solución real.</h2>

        <p className="process-description">
          Te acompañamos en cada etapa para transformar
          lo que necesitás en una herramienta para tu negocio.
        </p>
      </div>

      <div className="process-grid">

        {pasos.map((paso, index) => (
          <div className="process-card" key={paso.titulo}>

            <span className="process-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{paso.titulo}</h3>

            <p>{paso.descripcion}</p>

          </div>
        ))}

      </div>

    </section>
  )
}




function About() {
  return (
    <section className="about" id="nosotros">

      <div className="about-left">
        <p className="tag">SOBRE BIT SOLUTIONS</p>

        <h2>
          Tecnología cercana,
          soluciones a medida.
        </h2>
      </div>

      <div className="about-right">

        <p>
          Bit Solutions nace con una idea simple:
          acercar herramientas digitales útiles a
          negocios y emprendimientos.
        </p>

        <p>
          Nos interesa entender cómo funciona cada negocio,
          qué dificultades tiene y qué podemos desarrollar
          para facilitar su día a día.
        </p>

        <p>
          Creemos que una buena solución no es necesariamente
          la más compleja, sino la que realmente ayuda
          a trabajar mejor.
        </p>

        <a href="#contacto" className="about-link">
          Conversemos sobre tu proyecto →
        </a>

      </div>

    </section>
  )
}


function Demos() {
  return (
    <section className="section demos-section" id="demos">
      <div className="section-header">
        <p className="tag">DEMOS</p>
        <h2>Ideas listas para adaptar a distintos negocios.</h2>
      </div>

      <div className="demo-card">
        <div className="demo-preview">
          <span>Agenda online</span>
          <strong>Studio Demo</strong>
          <p>Servicios · Profesionales · Reservas</p>
        </div>

        <div className="demo-content">
          <p className="tag">PELUQUERÍA / ESTÉTICA</p>
          <h3>Web con gestión de reservas</h3>
          <p>
            Demo genérica para salones, barberías, centros de estética, uñas,
            pestañas y profesionales que trabajan con agenda.
          </p>

          <a href="#/demos/peluqueria" className="btn-primary">
            Ver demo
          </a>
        </div>
      </div>
    </section>
  )
}

function Features() {

  const funcionalidades = [
    {
      icon: FaCalendarAlt,
      title: "Reservas online",
      description: "Tus clientes pueden elegir servicios, fechas y horarios disponibles."
    },
    {
      icon: FaShoppingBag,
      title: "Pedidos personalizados",
      description: "Recibí pedidos con opciones, cantidades y extras elegidos por el cliente."
    },
    {
      icon: FaCalculator,
      title: "Presupuestos automáticos",
      description: "Calculá precios automáticamente según las opciones seleccionadas."
    },
    {
      icon: FaUsers,
      title: "Gestión de clientes",
      description: "Organizá información, historial y seguimiento de tus clientes."
    },
    {
      icon: FaCreditCard,
      title: "Señas y pagos",
      description: "Gestioná señas, comprobantes y estados de pago."
    },
    {
      icon: FaClipboardList,
      title: "Paneles administrativos",
      description: "Administrá reservas, servicios y pedidos desde un solo lugar."
    },
    {
      icon: FaBoxOpen,
      title: "Control de stock",
      description: "Llevá un registro de productos, cantidades y disponibilidad."
    },
    {
      icon: FaChartLine,
      title: "Reportes de ventas",
      description: "Visualizá resultados e indicadores importantes de tu negocio."
    },
    {
      icon: FaWhatsapp,
      title: "Integraciones con WhatsApp",
      description: "Facilitá consultas, confirmaciones y comunicaciones con tus clientes."
    }
  ]

  return (
    <section className="section features-section" id="funcionalidades">

      <div className="section-header">
        <p className="tag">SOLUCIONES PERSONALIZADAS</p>

        <h2>
          Una web puede hacer mucho más
          que mostrar información.
        </h2>

        <p className="features-description">
          Estas son algunas de las funcionalidades
          que podemos desarrollar para simplificar
          el día a día de tu negocio.
        </p>
      </div>

      <div className="features-grid">

        {funcionalidades.map((funcionalidad) => {

          const Icono = funcionalidad.icon

          return (
            <div className="feature-card" key={funcionalidad.title}>

              <div className="feature-icon">
                <Icono />
              </div>

              <h3>{funcionalidad.title}</h3>

              <p>{funcionalidad.description}</p>

            </div>
          )
        })}

      </div>

      <div className="features-cta">

        <h3>¿Necesitás algo diferente?</h3>

        <p>
          Contanos tu idea y buscamos una solución
          que se adapte a tu negocio.
        </p>

        <a href="#contacto" className="btn-primary">
          Hablemos de tu proyecto →
        </a>

      </div>

    </section>
  )
}


function FAQ() {

  const preguntas = [
    {
      pregunta: "¿Cuánto cuesta desarrollar una página web?",
      respuesta: "El precio depende del diseño, las funcionalidades y las necesidades de cada negocio. Preparamos un presupuesto personalizado."
    },
    {
      pregunta: "¿Necesito saber de tecnología?",
      respuesta: "No. Nos contás qué necesitás y te ayudamos a encontrar la solución más adecuada para tu negocio."
    },
    {
      pregunta: "¿Puedo administrar mi propia página o sistema?",
      respuesta: "Sí, podemos desarrollar herramientas para que gestiones contenidos, servicios, reservas o pedidos según las necesidades de tu proyecto."
    },
    {
      pregunta: "¿Puedo agregar funcionalidades más adelante?",
      respuesta: "Sí. Podemos planificar el proyecto por etapas y evaluar nuevas funcionalidades a medida que tu negocio crezca."
    },
    {
      pregunta: "¿Trabajan con emprendimientos pequeños?",
      respuesta: "Sí. Desarrollamos propuestas adaptadas a emprendedores, profesionales y comercios de distintos rubros."
    },
    {
      pregunta: "¿Cuánto demora desarrollar un proyecto?",
      respuesta: "Depende de la complejidad y las funcionalidades solicitadas. Antes de comenzar, definimos los tiempos estimados de desarrollo."
    }
  ]

  return (
    <section className="section faq-section" id="preguntas">

      <div className="section-header">
        <p className="tag">PREGUNTAS FRECUENTES</p>

        <h2>¿Tenés alguna duda?</h2>

        <p className="faq-description">
          Estas son algunas de las preguntas más comunes
          antes de comenzar un proyecto.
        </p>
      </div>

      <div className="faq-list">

        {preguntas.map((item) => (
          <details className="faq-item" key={item.pregunta}>

            <summary>
              {item.pregunta}

              <span className="faq-plus" aria-hidden="true">
                +
              </span>
            </summary>

            <p>{item.respuesta}</p>

          </details>
        ))}

      </div>

    </section>
  )
}



function Contact() {
  const [state, handleSubmit] = useForm("mvkzzzpz")
  return (
            <section className="contact" id="contacto">

        <h2 className="contact-title">
          Hagamos realidad tu idea.
        </h2>

        <p className="contact-description">
          No importa si ya sabés exactamente lo que necesitás
          o si recién tenés una idea.
          Contanos sobre tu negocio y buscamos juntos
          la mejor solución.
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
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)

    window.addEventListener("hashchange", handleHashChange)

    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

    if (hash.startsWith("#/demos/peluqueria")) {
      return <PeluqueriaDemo hash={hash} />
    }
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Demos />
      <HowWeWork />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App

