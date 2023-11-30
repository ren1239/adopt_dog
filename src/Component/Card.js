import "./Card.css";
import { useState } from "react";

function Card({ dog }) {
  const { name, age } = dog;
  const [isSelected, setIsSelected] = useState(false);

  // Handle Click Function - toggle boolean
  const handleClick = () => {
    setIsSelected(!isSelected);
    console.log("enlarge");
  };

  // Determine the card's className based on whether it's selected
  const cardClasses = isSelected ? "card selected" : "card";

  // Return Statement
  return (
    <div className={cardClasses} onClick={handleClick}>
      <div className="picture">
        <img src="/" alt="dog name" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>{age}</p>
      </div>
    </div>
  );
}

export default Card;
