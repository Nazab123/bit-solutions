import "../styles/Services.css"
import { FaGlobe, FaLaptopCode, FaCogs, FaChartBar } from "react-icons/fa"


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



export default Services