import React from "react";
import Tilt from "react-parallax-tilt";

const Card = ({handlePointerEvent, name, img, cardStyle, handleHoverEvent}) => {


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
              <h2>Stock analysis</h2>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium accusamus tempora magni,
                in pariatur ipsam sint illo ducimus minima ab? Dolores illum provident, cumque distinctio reiciendis laudantium quasi ullam dignissimos.</h3>
                <a href="https://craws.uber.space/"  target="_blank" rel="noopener noreferrer">Try out!</a>
            </div>
        </div>
        </Tilt>
      </article>
    );
  
  };
  
  export default Card;