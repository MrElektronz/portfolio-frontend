import React,{useState} from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);


  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
  }
  return (<div className="contact" id="contact">
    <div className="left">
      <img src="img/shake.svg" alt="" />
    </div>
    <div className="right">
      <h2>Do you have any projects you need help with?</h2>
      <h3>Let's talk!</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required="required"/>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
        {message && <span>Thanks, I will reply ASAP :)</span>}
      </form>
    </div>

  </div>);
}
