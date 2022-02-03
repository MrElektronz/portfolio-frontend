import React, {useEffect, useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  uePortfolio,
  aiPortfolio,
  upPortfolio,
  threeDPortfolio,
  appsPortfolio,
  blockchainPortfolio
} from "../../portfolio.js";


export default function Portfolio() {

  const [selected,setSelected] = useState("ue");
  const [data,setData] = useState([]);

  const list = [
    {
      id: "ue",
      title: "Unreal Engine",
    },
    {
      id: "ai",
      title: "AI",
    },
    {
      id: "apps",
      title: "Applications",
    },
    {
      id: "3d",
      title: "3D-Art",
    },
    {
      id: "up",
      title: "University Projects",
    },
    {
      id: "blockchain",
      title: "Blockchain",
    }
  ];

  useEffect(()=>{
    switch(selected){
      case "ue":
        setData(uePortfolio);
        break;
      case "ai":
        setData(aiPortfolio);
        break;
      case "3d":
        setData(threeDPortfolio);
        break;
      case "up":
        setData(upPortfolio);
        break;
      case "blockchain":
        setData(blockchainPortfolio);
        break;
      case "apps":
        setData(appsPortfolio);
        break;

      default:
        setData(uePortfolio);

    }
  },[selected]);

  return <div className="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <ul>
      {list.map((item,i)=>(
        <PortfolioList title={item.title} active={selected === item.id} key={i}
        setSelected={setSelected}
        id={item.id}/>
      ))}
    </ul>
    <div className="container">
      {data.map((d)=> (
      <a href={d.link} target="_blank" rel="noopener noreferrer">
        <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
      </a>
      
      ))}
      
    </div>

  </div>;
}


