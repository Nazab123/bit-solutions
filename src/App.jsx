
import "./App.css"

import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { useForm } from "@formspree/react"
import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Features from "./components/Features"
import Demos from "./components/Demos"
import HowWeWork from "./components/HowWeWork"
import About from "./components/About"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import PeluqueriaDemo from "./demos/peluqueria/PeluqueriaDemo"








function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)

    window.addEventListener("hashchange", handleHashChange)

    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

    if (hash.startsWith("#/demos/peluqueria")) {
      return <PeluqueriaDemo hash={hash} />
    }

    return (
      <>
        <Navbar />

        <main>
          <Hero />
          <Services />
          <Features />
          <Demos />
          <HowWeWork />
          <About />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </>
    )

}

export default App

