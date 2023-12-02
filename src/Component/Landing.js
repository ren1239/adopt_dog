import React from "react";
import "./Landing.css";
import dog_face from "../Assets/Dog_Face.jpg";
import "../index.css";

function Landing() {
  return (
    <body className="landing-body">
      <div className="landing-text bg-lightest">
        <h1 className=" text-5xl font-newsreader font-extralight">
          <span className="text-primary">Adopt</span> <br />
          Don't Shop
        </h1>
        <p className="mt-4 text-xs">It's never too late to fall in love</p>
        <div>
          <a
            href="./"
            className="inline-block border-2 rounded-md shadow-md text-xs
             border-primary bg-white text-dark px-7 py-2 mt-40"
          >
            CHANGE A LIFE
          </a>
        </div>
      </div>
      <div>
        <img src={dog_face} alt="dog face" className="landing-image"></img>
      </div>
    </body>
  );
}

export default Landing;
