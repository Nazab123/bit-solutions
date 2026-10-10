
import "../styles/Services.css"
import {
  FaGlobe,
  FaLaptopCode,
  FaCogs,
  FaChartBar
} from "react-icons/fa"

function Services() {
  return (
    <section className="section" id="servicios">

      <div className="section-header">
        <p className="tag">NUESTROS SERVICIOS</p>

        <h2>
          Soluciones digitales para tu negocio.
        </h2>

        <p className="services-intro">
          Desarrollamos páginas web, sistemas y
          herramientas digitales para emprendimientos,
          comercios y profesionales en Uruguay.
        </p>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-icon">
            <FaGlobe />
          </div>

          <h3>Diseño y desarrollo de páginas web</h3>

          <p>
            Creamos sitios web profesionales para
            mostrar tus productos, servicios y trabajos.
            Diseños adaptados a celulares, tablets
            y computadoras, con opciones de contacto
            y consultas por WhatsApp.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaLaptopCode />
          </div>

          <h3>Sistemas de reservas y gestión</h3>

          <p>
            Desarrollamos sistemas a medida para
            gestionar turnos, reservas, pedidos y
            clientes. Ideales para peluquerías,
            centros de estética, comercios y
            emprendimientos que necesitan organizarse.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaCogs />
          </div>

          <h3>Automatización de procesos</h3>

          <p>
            Automatizamos tareas repetitivas,
            consultas y procesos administrativos
            para reducir el trabajo manual
            y simplificar el día a día de tu negocio.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaChartBar />
          </div>

          <h3>Dashboards y análisis de datos</h3>

          <p>
            Creamos reportes y paneles visuales
            para analizar ventas, clientes e
            indicadores de tu negocio, ayudándote
            a tomar decisiones con información clara.
          </p>
        </div>

      </div>

      <p className="services-note">
        Cada proyecto se desarrolla según las
        necesidades y objetivos de tu negocio.
      </p>

    </section>
  )
}

export default Services
