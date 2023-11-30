import React from "react";
import Card from "./Card";

function CardDisplay({ dogs }) {
  return (
    <div>
      <div className="card-list">
        {dogs.map((dog) => {
          return <Card dog={dog} key={dog.id} />;
        })}
      </div>
    </div>
  );
}

export default CardDisplay;
