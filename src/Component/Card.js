function Card({ dog, onCardClick, isSelected }) {
  const { name, age, sex, location, picture } = dog;

  // Determine the card's className based on whether it's selected
  const cardClasses = isSelected ? "card selected" : "card";

  // Return Statement
  return (
    <div
      className={`${cardClasses} 
    h-3/5 flex flex-col  rounded-xl
     bg-white text-center shadow overflow-hidden 
      w-72`}
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
        <i class="fas fa-map-marker-alt ml-3"></i>
      </span>
    </div>
  );
}

export default Card;
