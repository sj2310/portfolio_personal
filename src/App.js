import "./App.css";
import { Navbar } from "./components/navbar";
import { First } from "./components/first";
import { About } from "./components/about";
import {Skills} from "./components/skill"
import { Project } from "./components/project";
import { Contact } from "./components/contact";
import { Bottom } from "./components/bottom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar/>
      </header>
      <section className="main">
        <First/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </section>
      <footer className="footer">
        <Bottom/>
      </footer>
    </div>
  );
}

export default App;
