import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import "nes.css/css/nes.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About}/>
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </BrowserRouter>
      
  );
}

export default App;
