import React, {useState} from "react";
import "./topbar.scss";

export default function Topbar() {

    const [selected,setSelected] = useState("#main");

    const list = [
        {
          id: "#main",
          title: ".main()",
        },
        {
            id: "#portfolio",
            title: ".portfolio()",
        },
        {
            id: "#skills",
            title: ".skills()",
        },
        {
            id: "#contact",
            title: ".contact()",
        }
    ]

  return <div className="topbar">
      <div className="wrapper">
          <div className="left">
              Kevin Becker
          </div>
          <div className="right">
              {list.map((item,i)=>(
                  <a key={i} href={item.id} className={selected === item.id  ? "pagelink active" : "pagelink"} onClick={()=>setSelected(item.id)}>{item.title}</a>
              ))}
          </div>
      </div>
  </div>;
}

/**
 *  return <div className="topbar">
      <div className="wrapper">
          <div className="left">
              Kevin Becker
          </div>
          <div className="right">
              <a href="#main" className="pagelink">.main()</a>
              <a href="#portfolio" className="pagelink">.portfolio()</a>
              <a href="#skills" className="pagelink">.skills()</a>
              <a href="#contact" className="pagelink">.contact()</a>
          </div>
      </div>
  </div>;
 */