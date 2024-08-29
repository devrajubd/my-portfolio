import "./App.css";
import About from "./components/About";
import Contect from "./components/Contect";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Project />
      <Contect />
      <Footer />
    </>
  );
}

export default App;
