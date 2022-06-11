import "./App.css";
import "./mediaqueries.css"
import Home from "./components/Home";
import About from "./components/About";
import AOS from "aos";
import { useEffect } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      AOS.init({
        duration: 600,
        offset: 300,
        once: true,
      });
    });
  }, []);

  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
