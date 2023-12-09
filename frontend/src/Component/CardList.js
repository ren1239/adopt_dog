import Card from "./Card.js";
import Dogs from "./Dogs.js";
import BigCard from "./BigCard.js";
import "./CardList.css";

function CardList() {
  return (
    <div>
      <h3 className="text-5xl font-newsreader font-extralight my-20 p-6">
        Looking for <span className="text-primary">Love?</span>
      </h3>
      <div className="card-list flex flex-col justify-center items-center gap-5 mx-20 my-20 md:flex-row ;">
        {Dogs.slice(0, 3).map((dog) => {
          return <Card dog={dog} key={dog.id} />;
        })}
      </div>
      {Dogs.slice(2, 3).map((dog) => {
        return <BigCard dog={dog} key={dog.id} />;
      })}
    </div>
  );
}

export default CardList;
