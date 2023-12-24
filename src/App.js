import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./containers/home/Home";
import Contact from "./containers/contact/Contact";
import Portfolio from "./containers/portfolio/Portfolio";
import Skills from "./containers/skills/Skills";
import Resume from "./containers/resume/Resume";
import About from "./containers/about/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
