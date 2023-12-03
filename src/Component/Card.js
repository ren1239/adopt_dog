// import "./Card.css";
import picture from "../Assets/Dog_Face.jpg";

function Card({ dog, onCardClick, isSelected }) {
  const { name, age, sex } = dog;

  // Determine the card's className based on whether it's selected
  const cardClasses = isSelected ? "card selected" : "card";

  // Return Statement
  return (
    <div
      className={`${cardClasses} 
    h-3/5 flex flex-col divide-y divide-gray-200 rounded-xl
     bg-white text-center shadow overflow-hidden 
      w-70`}
      onClick={onCardClick}
    >
      <div className="picture">
        <img
          src={picture}
          alt={name}
          className="mx-auto h-60 flex-shrink-0  object-cover"
        />
      </div>
      <ul className="flex justify-between font-bold pt-6 mt-4 text-med text-gray-900 mx-8">
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
    </div>
  );
}

export default Card;
