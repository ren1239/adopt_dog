import Card from "./Card.js";
import Dogs from "./Dogs.js";
import "./CardList.css";
import { useState } from "react";

function CardList() {
  // Set the state of Card Clicked
  const [selectedCard, setSelectedCard] = useState(null);

  // Set the handle Click Function- Toggle the selected state on or off
  const handleClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div card-body>
      <h3>Looking for Love?</h3>
      <div className="card-list">
        {Dogs.slice(0, 3).map((dog) => {
          return (
            // Set a conditional Rendering statement - if no card is selected (null) all will render
            // If a card is seleceted, the first statement fails
            // it will check id of dog to see if it matches -selectedCard. for those which does not. it will not render
            (selectedCard === null || dog.id === selectedCard) && (
              <Card
                dog={dog}
                key={dog.id}
                isSelected={dog.id === selectedCard}
                onCardClick={() => handleClick(dog.id)}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default CardList;
