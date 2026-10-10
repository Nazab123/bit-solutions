import "../styles/Demos.css"



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



export default Demos