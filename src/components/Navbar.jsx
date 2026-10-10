
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import logoBit from "../assets/logo-bit.jpeg"
import "../styles/Navbar.css"

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => {
    setMenuAbierto(false)
  }

  return (
    <nav className="navbar">

      <div className="logo">
        <img
          src={logoBit}
          alt="Bit Solutions logo"
          className="logo-img"
        />
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuAbierto}
        aria-controls="nav-links"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? <FaTimes /> : <FaBars />}
      </button>

      <div
        id="nav-links"
        className={`nav-links ${menuAbierto ? "open" : ""}`}
      >
        <a href="#inicio" onClick={cerrarMenu}>
          Inicio
        </a>

        <a href="#servicios" onClick={cerrarMenu}>
          Servicios
        </a>

        <a href="#funcionalidades" onClick={cerrarMenu}>
          Soluciones
        </a>

        <a href="#demos" onClick={cerrarMenu}>
          Demos
        </a>

        <a href="#proceso" onClick={cerrarMenu}>
          Cómo trabajamos
        </a>

        <a href="#nosotros" onClick={cerrarMenu}>
          Nosotros
        </a>

        <a href="#preguntas" onClick={cerrarMenu}>
          Preguntas frecuentes
        </a>

        <a
          href="#contacto"
          className="nav-contact"
          onClick={cerrarMenu}
        >
          Contacto
        </a>
      </div>

    </nav>
  )
}

export default Navbar
