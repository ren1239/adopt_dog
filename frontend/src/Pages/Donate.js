import React from "react";
import QR_Code from "../Assets/QR_Code.jpg";

function Donate() {
  return (
    <div className="w-screen flex flex-col justify-center items-center gap-4 mt-4">
      <div>
        <h1 className="text-5xl font-extralight font-newsreader text-center ">
          <span className="text-primary">Scan</span> <br />
          To Donate{" "}
        </h1>
      </div>
      <div className="card rounded-xl h-60 md:h-auto shadow-lg py-6">
        <img src={QR_Code} alt="qr code" className=" h-full"></img>
      </div>
    </div>
  );
}

export default Donate;
