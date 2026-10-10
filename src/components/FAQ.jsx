import "../styles/FAQ.css"



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

export default FAQ