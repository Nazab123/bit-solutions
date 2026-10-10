import "../styles/HowWeWork.css"



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



export default HowWeWork