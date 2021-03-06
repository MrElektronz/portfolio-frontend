import React, {useEffect, useState} from "react";
//import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import Card from "./Card.jsx";
import Paginator from "./Paginator";



export default function Portfolio() {


    const data = [
    {
      name: "Stock Analysis",
      img: "https://www.schwab.com/resource-center/insights/sites/g/files/eyrktu156/files/analysis-graph-960x537.jpg",
      href: "https://craws.uber.space/",
      desc: "This website lists all stocks in the DAX and DowJones, including its graph data and numerous characteristics. The frontend was developed in 'Angular' "+
      "and the backend is coded in Python and uses 'Flask' to send processed data from it to the frontend.",
      btn: "Try out!"
    },
    {
      name: "KniffelOWL",
      img: "https://cdn2.familie.de/4c/d2/60/1d30c3bf164089f554c7361224_cmUgOTUwIDQ3NQM0MjEwYjY4NWM2Mg==_play-a-game-with-dice.jpg",
      href: "https://github.com/MrElektronz/KniffelOWL",
      desc: "A university project which enables users to play the game yahtzee online. The client and server were both developed in Java, to add a more modern look to the client I've utilized the framework 'JavaFX'. "+
      "The server operates through Java's included websockets.",
      btn: "Check it out"
    },
    {
      name: "Unreal Engine 4 Assets",
      img: "https://wallpapercave.com/wp/wp8039110.jpg",
      href: "https://www.unrealengine.com/marketplace/en-US/profile/MrElektronz",
      desc: "I've developed a plentitude of asset packs for the 'Unreal Engine 4', including a magnetism simulation and a functioning Buff System.",
      btn: "Check it out"
    },
  ];

  const swipeBorder = 50;

  const [index, setIndex] = useState(0);
  const [holding, setHolding] = useState(false);


  const slideLeft = () => {
    if(index===0){
      setIndex(data.length-1);
    }else if(index===1){
      setIndex(index-1);
    }
    else{
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
      if(index===data.length-1){
        setIndex(0);
      }else if(index===data.length-2){
        setIndex(index+1);
      }
      else{
        setIndex(index + 1);
      }
  };


  const handlePageChange = (page) => {
    let n = page - index;
    setIndex(index + n);
  };



  useEffect(() => {
    const interval = setInterval(() => {
      if(!holding){
        slideRight();
      }
    },4000);

    return () => clearInterval(interval);
  }, [index, data,holding, slideRight]);


  const handleHoverEvent = (e) => {


    e.target.onmouseenter = onPointerEnter;
    e.target.onmouseleave = onPointerLeave;

    function onPointerEnter(e){
      setHolding(true);
    }

    function onPointerLeave(e){
      setHolding(false);
      
    }
  }


  const handlePointerEvent = (e) => {
    /* check which type of event we have, 
    and set a flag variable */
    let isTouchEvent = e.type === "touchstart" ? true : false;

    /* this is our card we will move */
    let card = e.target;
    /* to keep track of the value to offset the card left */
    let offset = 0;
    /* keeps the initial mouse click x value */
    let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;

    /* mouse events */
    /* set the documents onmousemove event to use this function */
    document.onmousemove = onPointerMove;
    /* sets the documents onmouseup event to use this function */
    document.onmouseup = onPointerEnd;


    /* touch events */
    /* set the documents ontouchmove to this function */
    document.ontouchmove = onPointerMove;
    /* set the documents ontouchend to this function */
    document.ontouchend = onPointerEnd;


    /* when the mouse moves we handle the event here */
    function onPointerMove(e) {
      /* set offset to the current position of the cursor,
      minus the initial starting position  */

      if(isTouchEvent){
        setHolding(true);
      }
      
      offset = (isTouchEvent ? e.touches[0].clientX : e.clientX) - initialX;
      if (offset <= -swipeBorder) {
        slideRight();
        /* if we're at the last card, snap back to center */
        if (index === data.length - 1) {
          card.style.left = 0;
        } else {
          /* hide the shift back to center 
        until after the transition */
          setTimeout(() => {
            card.style.left = 0;
          }, 1000);
        }
        return;
      }
      if (offset >= swipeBorder) {
        slideLeft();
        /* if we're at the first card, snap back to center */
        if (index === 0) {
          card.style.left = 0;
        } else {
          /* hide the shift back to center 
        until after the transition */
          setTimeout(() => {
            card.style.left = 0;
          }, 1000);
        }
        return;
      }
      /* set the left style property of the card to the offset value */
      //card.style.left = offset + "px";
    }

    function onPointerEnd(e) {
      /* if user releases mouse early,
      card needs to snap back */
      if (offset < 0 && offset > -swipeBorder) {
        card.style.left = 0;
      }
      if (offset > 0 && offset < swipeBorder) {
        card.style.left = 0;
      }

      if(isTouchEvent){
        setHolding(false);
      }
      /* remove functions from event listeners
      (stop tracking pointer movements) */
      document.onmousemove = null;
      document.onmouseup = null;

      document.ontouchmove = null;
      document.ontouchend = null;

    }
  };

  function getCardScale(){
    if(window.innerWidth < 510){
      return 1.0;
    }
    return 1.2;
  }
  //<Paginator dataLength={data.length} activeIndex={index} handlePageChange={handlePageChange}/>
  return <div className="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <div className="pcontainer">
      <div className="card-container">
      <Paginator dataLength={data.length} activeIndex={index} handlePageChange={handlePageChange}/>
        

        {data.map((card,n)=>{
          let position = n>index ? "nextCard" : n === index ? "activeCard" : "prevCard";

          if(n===(index+1) || n===(index-1)){
            position=position+" neighbour";
            
          }

            if(index === 0){
              position = n === index ? "activeCard" : n < data.length-1 ? "nextCard" : "prevCard neighbour";
              if(n === index+1){
                position=position+" neighbour"
              }
            }
            else if(index === data.length-1){
              position = n === index ? "activeCard" : n < 1 ? "nextCard neighbour" : "prevCard";
              if(n === index-1){
                position=position+" neighbour"
              }
            }

          return <Card key={n} handlePointerEvent={handlePointerEvent} {...card} cardStyle={position} handleHoverEvent={handleHoverEvent} cardScale={getCardScale()}></Card>
        })}
      </div>
    </div>
  </div>;
}




/*return <div className="portfolio" id="portfolio">
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
*/
