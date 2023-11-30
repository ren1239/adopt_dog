import Card from "./Card.js";
import Dogs from "./Dogs.js";
import "./CardList.css";

function CardList() {
  return (
    <div card-body>
      <h3>Looking for Love?</h3>
      <div className="card-list">
        {Dogs.slice(0, 3).map((dog) => {
          return <Card dog={dog} key={dog.id} />;
        })}
      </div>
    </div>
  );
}

export default CardList;
