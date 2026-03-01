import "./App.css";
import Headers from "./components/Headers";
import AboutTemp from "./components/AboutTemp";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Headers />
      <AboutTemp />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
