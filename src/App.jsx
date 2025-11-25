import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <main className="bg-[#0d182e]">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
