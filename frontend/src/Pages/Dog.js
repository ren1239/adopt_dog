import React from "react";
import CardDisplay from "../Component/CardDisplay";
import { useEffect, useState } from "react";

function Dog() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8080/dogs");
        if (!response.ok) {
          throw new Error(`HTTP request error ${response.status}`);
        }
        const data = await response.json();

        // Introduce a 5-second delay for testing
        await new Promise((resolve) => setTimeout(resolve, 3000));

        setDogs(data); // Store the data in state

        console.log(data);
      } catch (error) {
        console.error("fetch error", error);
        setError(error.message || "Failed to fetch data."); // Set error state
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <span class="loader"></span>{" "}
      </div>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="Nav-Spacer h-8"></div>
      <CardDisplay dogs={dogs} />
    </div>
  );
}

export default Dog;
