import React from "react";
import Card from "./Card";

function CardDisplay({ dogs }) {
  return (
    <div>
      <div className="card-list flex flex-col justify-center items-center gap-5 mx-20 my-20 md:flex-row flex-wrap ;">
        {dogs.map((dog) => {
          return <Card dog={dog} key={dog.id} />;
        })}
      </div>
    </div>
  );
}

export default CardDisplay;
