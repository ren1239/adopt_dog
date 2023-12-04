import React from "react";
import { useState } from "react";
import ProgressCircle from "./ProgressCircle";

function BigCard({ dog }) {
  const {
    name,
    age,
    sex,
    location,
    picture,
    neutered,
    friendly,
    energetic,
    sociable,
    grooming,
    trainability,
  } = dog;

  // Heart click state
  const [heartColor, setheartColor] = useState("text-white");

  // Handle heart click
  const handleClick = () => {
    const newHeartColor =
      heartColor === "text-white" ? "text-red" : "text-white";
    setheartColor(newHeartColor);
  };

  // Return Statement
  return (
    <div
      className={`
    h-auto grid grid-cols-6 grid-rows-6 w-auto rounded-xl mx-36 my-20 pb-2 overflow-hidden
     bg-white text-center shadow 
      `}
    >
      <img
        src={picture}
        alt={name}
        className=" row-span-4 col-span-2 h-full w-auto  object-cover "
      />
      <div className="col-start-1 col-end-7 text-left my-3">
        <ul className=" flex justify-between font-bold pt-6 text-med text-gray-900 mx-8 text-dark">
          <li>
            <h3>
              {name} <span>{age}</span>
            </h3>
          </li>
          <li>
            {/* Replace 'sex' with corresponding icon */}
            {sex === "male" ? (
              <i className="fas fa-mars"></i>
            ) : (
              <i className="fas fa-venus"></i>
            )}
          </li>
        </ul>
        <span className="text-sm text-left mx-8 mt-3 mb-4 text-medium">
          {location}
          <i class="fas fa-map-marker-alt ml-3"></i>
        </span>
      </div>

      <div className="bg-lightest col-start-3 row-start-1 col-span-4 row-span-4">
        <h1 className="text-lg mt-6 font-extralight "> Meet {name} !</h1>
        <p className="text-xs mx-16 my-8 font-extralight leading-6 ">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="bg-white col-start-1 row-start-6 col-span-6 ">
        <ul className="flex justify-around items-center h-full text-xs font-extralight ">
          <li>
            neutered <span> {neutered}</span>
          </li>
          <li className=" flex flex-col">
            <ProgressCircle value={friendly} />
            friendly
          </li>
          <li className=" flex flex-col">
            <ProgressCircle value={energetic} />
            energetic
          </li>
          <li className=" flex flex-col">
            <ProgressCircle value={trainability} />
            trainability
          </li>{" "}
          <li className=" flex flex-col">
            <ProgressCircle value={sociable} />
            sociable
          </li>{" "}
          <li className=" flex flex-col">
            <ProgressCircle value={grooming} />
            grooming
          </li>{" "}
        </ul>
      </div>
    </div>
  );
}

export default BigCard;
