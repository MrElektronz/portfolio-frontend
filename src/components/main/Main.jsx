import React, { useEffect, useRef } from "react";
import "./main.scss";
import { init } from "ityped";

export default function Main() {

  const textRef = useRef();
  useEffect(() =>{
    init(textRef.current, {
      showCursor: true,
      strings: ["Developer", "3D-Artist", "Solidity Developer", "Software Engineer", "Game Developer", "Freelancer"],
      typeSpeed: 40,
      backDelay: 1000,
    })
  },[]);
  return <div className='main' id="main">
    <div className="window">
      <div className="textContainer">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Kevin Becker</h1>
          <h3>a <span ref={textRef}></span></h3>
        </div>
      </div>
    </div>
  </div>;
}
