import "../styles/Features.css"
import {FaCalendarAlt, FaShoppingBag, FaCalculator, FaUsers, FaCreditCard, FaClipboardList, FaBoxOpen, FaChartLine, FaWhatsapp} from "react-icons/fa"




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



export default Features