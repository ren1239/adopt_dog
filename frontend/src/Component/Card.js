import { useState } from "react";

function Card({ dog, onCardClick, isSelected }) {
  const { name, age, sex, location, picture } = dog;

  // Determine the card's className based on whether it's selected
  const cardClasses = isSelected ? "card selected" : "card";

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
      className={`${cardClasses} 
    h-4/5 flex flex-col  rounded-xl
     bg-white text-center shadow overflow-hidden 
      w-72  md:h-96 md:pb-20 relative`}
      onClick={onCardClick}
    >
      <img
        src={picture}
        alt={name}
        className="mx-auto h-60 flex-shrink-0  object-cover "
      />

      <ul className="flex justify-between font-bold pt-6 mt-4 text-med text-gray-900 mx-8 text-dark">
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
        <i className="fas fa-map-marker-alt ml-3"></i>
      </span>
      <span onClick={handleClick}>
        {" "}
        <i
          className={`fa fa-heart absolute top-3 right-3 text-xl  shadow-white ${heartColor} `}
        ></i>{" "}
      </span>
    </div>
  );
}

export default Card;
