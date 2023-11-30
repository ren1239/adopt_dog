import React from "react";
import "./Landing.css";
import dog_face from "../Assets/Dog_Face.jpg";

function Landing() {
  return (
    <body className="landing-body">
      <div className="landing-text">
        <h1>Adopt Don't Shop</h1>
        <p>It's never too late to fall in love</p>
        <button>CHANGE A LIFE</button>
      </div>
      <div>
        <img src={dog_face} alt="dog face" className="landing-image"></img>
      </div>
    </body>
  );
}

export default Landing;
