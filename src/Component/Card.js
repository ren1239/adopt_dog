import "./Card.css";

function Card({ dog, onCardClick, isSelected }) {
  const { name, age } = dog;

  // Determine the card's className based on whether it's selected
  const cardClasses = isSelected ? "card selected" : "card";

  // Return Statement
  return (
    <div className={cardClasses} onClick={onCardClick}>
      <div className="picture">
        <img src="/" alt={name} />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>{age}</p>
      </div>
    </div>
  );
}

export default Card;
