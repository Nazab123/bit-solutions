import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import "../styles/Footer.css"




function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>Bit Solutions</strong>
        <p>Soluciones digitales para tu negocio.</p>
      </div>

      <div className="footer-socials">

        <a
          href="https://wa.me/59892730842"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://instagram.com/bitsolutionsuy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

      </div>

      <p className="footer-copy">© 2026 Bit Solutions</p>
    </footer>
  )
}


export default Footer