import "../styles/About.css"


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


export default About