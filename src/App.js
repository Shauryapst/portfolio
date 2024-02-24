
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import About from "./pages/About/About";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
