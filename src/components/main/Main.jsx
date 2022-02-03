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
      <div className="leftTextContainer">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Kevin Becker</h1>
          <h3>a <span ref={textRef}></span></h3>
        </div>
      </div>

      <div className="rightTextContainer">
        <div className="wrapper">
          <h2>I'm a <span>germany </span> based, young software developer with focus on <span>java</span> and <span>python</span>, utilizing their ecosystems for general <span>software</span> and <span>backend development</span>.
            I've started coding ~10 years ago and also gathered experience in game and web development on my way.
          </h2>
        </div>
      </div>

    </div>
  </div>;
}

/**
 *   const textRef = useRef();
  useEffect(() =>{
    init(textRef.current, {
      showCursor: true,
      strings: ["Developer", "3D-Artist", "Solidity Developer", "Software Engineer", "Game Developer", "Freelancer"],
      typeSpeed: 40,
      backDelay: 1000,
    })
  },[]);
 *   return <div className='main' id="main">
    <div className="window">
      <div className="leftTextContainer">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Kevin Becker</h1>
          <h3>a <span ref={textRef}></span></h3>
        </div>
      </div>

      <div className="rightTextContainer">
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, aperiam! Sint debitis alias voluptas architecto a fuga, eveniet, ducimus
          aliquam nisi optio tenetur obcaecati quae corporis, delectus perspiciatis nemo est.</h2>
      </div>

    </div>
  </div>;
 */
