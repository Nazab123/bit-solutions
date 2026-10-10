import { useForm } from "@formspree/react"
import "../styles/Contact.css"


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


export default Contact