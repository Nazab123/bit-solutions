import { useEffect, useState } from "react"
import "./PeluqueriaDemo.css"

const services = [
  {
    id: "corte",
    name: "Corte y brushing",
    duration: "60 min",
    price: "$1.200",
    description: "Corte personalizado, lavado y peinado final.",
  },
  {
    id: "color",
    name: "Coloracion",
    duration: "120 min",
    price: "$2.900",
    description: "Color completo, retoque o matizado segun diagnostico.",
  },
  {
    id: "tratamiento",
    name: "Tratamiento capilar",
    duration: "75 min",
    price: "$1.800",
    description: "Hidratacion, nutricion o reparacion para el cabello.",
  },
  {
    id: "peinado",
    name: "Peinado social",
    duration: "90 min",
    price: "$2.200",
    description: "Peinados para eventos, fotos, fiestas o casamientos.",
  },
]

const professionals = [
  {
    id: "ana",
    name: "Ana",
    role: "Estilista senior",
    initials: "AN",
    specialties: ["Cortes", "Color"],
  },
  {
    id: "mica",
    name: "Mica",
    role: "Colorista",
    initials: "MI",
    specialties: ["Balayage", "Matizados"],
  },
  {
    id: "sofi",
    name: "Sofi",
    role: "Peinadora",
    initials: "SO",
    specialties: ["Peinados", "Tratamientos"],
  },
]

const defaultTimes = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30"]

function PeluqueriaDemo({ hash }) {

      const section = hash.split("/").at(-1)

    useEffect(() => {
      if (!section || section === "peluqueria") return

      document.getElementById(`demo-peluqueria-${section}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, [section])
  const today = new Date().toISOString().split("T")[0]
  const [booking, setBooking] = useState({
    service: services[0].id,
    professional: professionals[0].id,
    date: today,
    time: "",
    name: "",
    phone: "",
  })
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      service: "corte",
      professional: "ana",
      date: today,
      time: "10:30",
      name: "Cliente demo",
      phone: "099 000 000",
    },
  ])
  const [confirmation, setConfirmation] = useState(null)

  const selectedService = services.find((service) => service.id === booking.service)
  const selectedProfessional = professionals.find(
    (professional) => professional.id === booking.professional
  )
  const bookedTimes = appointments
    .filter(
      (appointment) =>
        appointment.professional === booking.professional && appointment.date === booking.date
    )
    .map((appointment) => appointment.time)

  function updateBooking(field, value) {
    setBooking((current) => ({
      ...current,
      [field]: value,
      ...(field === "professional" || field === "date" ? { time: "" } : {}),
    }))
  }

  function submitBooking(event) {
    event.preventDefault()

    if (!booking.time || !booking.name.trim() || !booking.phone.trim()) {
      setConfirmation({
        type: "error",
        message: "Completa nombre, WhatsApp y horario para confirmar la reserva.",
      })
      return
    }

    const appointment = {
      ...booking,
      id: Date.now(),
      name: booking.name.trim(),
      phone: booking.phone.trim(),
    }

    setAppointments((current) => [appointment, ...current])
    setConfirmation({
      type: "success",
      message: `Turno confirmado para ${appointment.name} el ${appointment.date} a las ${appointment.time}.`,
    })
    setBooking((current) => ({
      ...current,
      time: "",
      name: "",
      phone: "",
    }))
  }

  return (
    <main className="salon-demo">
      <header className="salon-hero" id="demo-inicio">
        <nav className="salon-nav">
          <a className="salon-brand" href="#/demos/peluqueria">
            Studio Demo
          </a>
          <div className="salon-nav-links" aria-label="Navegacion principal">
              <a href="#/demos/peluqueria/servicios">Servicios</a>
              <a href="#/demos/peluqueria/equipo">Equipo</a>
              <a href="#/demos/peluqueria/reservas">Reservar</a>
              <a href="#">Volver a Bit Solutions</a>
          </div>
        </nav>

        <section className="salon-hero-content">
          <p className="salon-eyebrow">Peluqueria · Estetica · Reservas online</p>
          <h1>Una web lista para convertir consultas en turnos.</h1>
          <p>
            Demo adaptable para peluquerias, barberias, centros de estetica, uñas,
            pestañas y profesionales que trabajan con agenda.
          </p>
          <div className="salon-hero-actions">
            <a className="salon-button salon-primary" href="#/demos/peluqueria/reservas">
              Reservar turno
            </a>
            
            <a className="salon-button salon-ghost" href="#/demos/peluqueria/servicios">
              Ver servicios
            </a>
          </div>
        </section>
      </header>

      <section className="salon-stats" aria-label="Beneficios">
        <article>
          <strong>24/7</strong>
          <span>Reservas disponibles</span>
        </article>
        <article>
          <strong>3 pasos</strong>
          <span>Servicio, horario y datos</span>
        </article>
        <article>
          <strong>WhatsApp</strong>
          <span>Contacto directo</span>
        </article>
      </section>

      <section className="salon-section" id="demo-peluqueria-servicios">
        <div className="salon-section-heading">
          <p className="salon-eyebrow">Servicios</p>
          <h2>Catalogo simple para mostrar precios y duracion.</h2>
        </div>
        <div className="salon-service-grid">
          {services.map((service) => (
            <article className="salon-service-card" key={service.id}>
              <span>{service.duration}</span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="salon-section" id="demo-peluqueria-equipo">
        <div className="salon-section-heading">
          <p className="salon-eyebrow">Profesionales</p>
          <h2>El cliente puede elegir con quien atenderse.</h2>
        </div>
        <div className="salon-team-grid">
          {professionals.map((professional) => (
            <article className="salon-team-card" key={professional.id}>
              <div className="salon-avatar">{professional.initials}</div>
              <div>
                <h3>{professional.name}</h3>
                <p>{professional.role}</p>
                <div className="salon-chips">
                  {professional.specialties.map((specialty) => (
                    <span key={specialty}>{specialty}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="salon-booking-section" id="demo-peluqueria-reservas">
        <div className="salon-booking-copy">
          <p className="salon-eyebrow">Reserva online</p>
          <h2>Agenda de turnos clara, rapida y facil de adaptar.</h2>
          <p>
            Esta version funciona como demo sin base de datos. Luego se puede conectar
            a Firebase para guardar turnos reales, bloquear horarios y crear un panel
            para el negocio.
          </p>
          <div className="salon-summary-box">
            <span>Seleccion actual</span>
            <strong>{selectedService?.name}</strong>
            <p>
              {selectedProfessional?.name} · {booking.date || "Sin fecha"} ·{" "}
              {booking.time || "Elegi un horario"}
            </p>
          </div>
        </div>

        <form className="salon-booking-form" onSubmit={submitBooking}>
          <label>
            Servicio
            <select
              value={booking.service}
              onChange={(event) => updateBooking("service", event.target.value)}
            >
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} · {service.price}
                </option>
              ))}
            </select>
          </label>

          <label>
            Profesional
            <select
              value={booking.professional}
              onChange={(event) => updateBooking("professional", event.target.value)}
            >
              {professionals.map((professional) => (
                <option key={professional.id} value={professional.id}>
                  {professional.name} · {professional.role}
                </option>
              ))}
            </select>
          </label>

          <label>
            Fecha
            <input
              type="date"
              min={today}
              value={booking.date}
              onChange={(event) => updateBooking("date", event.target.value)}
            />
          </label>

          <div className="salon-time-picker" aria-label="Horarios disponibles">
            {defaultTimes.map((time) => {
              const isBooked = bookedTimes.includes(time)
              return (
                <button
                  type="button"
                  key={time}
                  className={booking.time === time ? "selected" : ""}
                  disabled={isBooked}
                  onClick={() => updateBooking("time", time)}
                >
                  {time}
                  {isBooked && <span>Ocupado</span>}
                </button>
              )
            })}
          </div>

          <label>
            Nombre
            <input
              type="text"
              placeholder="Ej: Maria Gonzalez"
              value={booking.name}
              onChange={(event) => updateBooking("name", event.target.value)}
            />
          </label>

          <label>
            WhatsApp
            <input
              type="tel"
              placeholder="Ej: 099 123 456"
              value={booking.phone}
              onChange={(event) => updateBooking("phone", event.target.value)}
            />
          </label>

          <button className="salon-button salon-primary salon-full" type="submit">
            Confirmar reserva
          </button>

          {confirmation && (
            <p className={`salon-form-message ${confirmation.type}`}>
              {confirmation.message}
            </p>
          )}
        </form>
      </section>

      <section className="salon-section salon-admin-section">
        <div className="salon-section-heading compact">
          <p className="salon-eyebrow">Panel demo</p>
          <h2>Turnos confirmados</h2>
        </div>
        <div className="salon-appointments">
          {appointments.map((appointment) => {
            const service = services.find((item) => item.id === appointment.service)
            const professional = professionals.find(
              (item) => item.id === appointment.professional
            )

            return (
              <article className="salon-appointment" key={appointment.id}>
                <div>
                  <strong>{appointment.name}</strong>
                  <span>{appointment.phone}</span>
                </div>
                <p>{service?.name}</p>
                <p>{professional?.name}</p>
                <time>
                  {appointment.date} · {appointment.time}
                </time>
              </article>
            )
          })}
        </div>
      </section>

      <footer className="salon-footer">
        <div>
          <h2>¿Queres una web asi para tu negocio?</h2>
          <p>Reservas, servicios, redes, ubicacion y contacto directo por WhatsApp.</p>
        </div>
        <a className="salon-button salon-primary" href="https://wa.me/59892730842">
          Contactar por WhatsApp
        </a>
      </footer>
    </main>
  )
}

export default PeluqueriaDemo
