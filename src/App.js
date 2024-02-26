import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
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

      <section class="full-screen">
        <Project />
      </section>

      {/* <section class="full-screen">
        <Certificate />
      </section>  */}
    </div>
  );
}

export default App;
