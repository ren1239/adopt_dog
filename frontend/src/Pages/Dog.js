import React from "react";
import CardDisplay from "../Component/CardDisplay";
import { useEffect, useState } from "react";

function Dog() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/dogs");
        if (!response.ok) {
          throw new Error(`HTTP request error ${response.status}`);
        }
        const data = await response.json();
        setDogs(data); // Store the data in state

        console.log(data);
      } catch (error) {
        console.error("fetch error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="Nav-Spacer h-8"></div>
      <CardDisplay dogs={dogs} />
    </div>
  );
}

export default Dog;
