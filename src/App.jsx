import Topbar from "./components/topbar/Topbar";
import React from "react";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Main from "./components/main/Main";

function App() {


  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Main/>
        <Portfolio/>
        <Skills/>
        <Contact/>
      </div>
    </div>
    
  );
}

export default App;
