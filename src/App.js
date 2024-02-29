import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Certificates from "./pages/Certificates/Certificates";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function App() {
 

  return (
    <div className="App">
      <section id="home" className="full-screen" >
        <Navbar />
        <Home />
      </section>

      <section id="about" className="full-screen" >
        <About />
      </section>

      <section id='projects' class="full-screen">
        <Project />
      </section>

      <section id='certificate' class="full-screen">
        <Certificates />
      </section> 
    </div>
  );
}

export default App;
