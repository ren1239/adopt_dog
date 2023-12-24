import React from "react";
import dog_face from "../Assets/Dog_Face.jpg";

function Landing() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 h-screen overflow-hidden">
      <div className="col-span-1 md:col-span-3 flex flex-col justify-center p-4 bg-lightest">
        <h1 className="text-5xl font-extralight font-newsreader text-center md:text-center">
          <span className="text-primary">Adopt</span> <br />
          Don't Shop
        </h1>
        <div className="w-1/3 mt-3 border-t border-primary mx-auto border-gray-300"></div>
        <p className="mt-4 text-sm text-center md:text-center">
          It's never too late to fall in love
        </p>
        <div className="pt-24 text-center md:text-center">
          <a
            href="/dogs"
            className="inline-block border-2 rounded-md shadow-md text-xs
             border-primary bg-white px-7 py-2 hover:bg-primary hover:border-white hover:text-white"
          >
            CHANGE A LIFE
          </a>
        </div>
      </div>

      <div className="col-span-1 md:col-span-6">
        <img
          src={dog_face}
          alt="dog face"
          className="w-auto h-full object-cover overflow-hidden"
        />
      </div>
    </div>
  );
}

export default Landing;
