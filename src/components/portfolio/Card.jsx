import React from "react";
import Tilt from "react-parallax-tilt";

const Card = ({handlePointerEvent, name, img, cardStyle, handleHoverEvent}) => {


    return (
      <article className={cardStyle}>
          <Tilt style={{height: '98%'}}
          scale={1.2}>
        <div className="card"
        onMouseDown={handlePointerEvent}
        onTouchStart={handlePointerEvent}
        onMouseEnter={handleHoverEvent}
        onMouseLeave={handleHoverEvent}>
            <img src={img} alt={name} />
        </div>
        </Tilt>
      </article>
    );
  
  };
  
  export default Card;