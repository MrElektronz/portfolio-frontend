import React from "react";
import Tilt from "react-parallax-tilt";

const Card = ({handlePointerEvent, name, img, href, desc, cardStyle, handleHoverEvent}) => {


    return (
      <article className={cardStyle}>
          <Tilt className="tilt" style={{height: '98%'}}
          scale={1.2}>
        <div className="card"
        onMouseDown={handlePointerEvent}
        onTouchStart={handlePointerEvent}
        onMouseEnter={handleHoverEvent}
        onMouseLeave={handleHoverEvent}>
            <img src={img} alt={name} />
            <div className="cardContent">
              <h2>{name}</h2>
              <h3>{desc}</h3>
                <a href={href}  target="_blank" rel="noopener noreferrer">Try out!</a>
            </div>
        </div>
        </Tilt>
      </article>
    );
  
  };
  
  export default Card;