import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import Dogs from "./Dogs.js";
import CardDisplay from "./CardDisplay.js";

function SearchList() {
  // State to hold the current search input
  const [searchField, setSearchField] = useState("");

  // State to hold the original list of dogs
  const [dogs, setDogs] = useState([]);

  // State to hold the filtered list of dogs based on the search input
  const [filteredDogs, setFilteredDogs] = useState(dogs);

  // useEffect hook to update the list of dogs and the filtered list when necessary
  useEffect(() => {
    // Set the original list of dogs
    setDogs(Dogs);

    // Filter dogs based on the search input
    const newFilteredDogs = dogs.filter((dog) =>
      dog.name.toLowerCase().includes(searchField)
    );

    // Update the state with the filtered dogs
    setFilteredDogs(newFilteredDogs);
  }, [dogs, searchField]);

  // Handler for changes in the search input
  const onSearchChange = (e) => {
    // Update the searchField state with the new search term
    const searchTerm = e.target.value.toLowerCase();
    setSearchField(searchTerm);
  };

  // JSX for rendering the component
  return (
    <div>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search dogs"
        className="search-box"
      />
      <CardDisplay dogs={filteredDogs} />
    </div>
  );
}

export default SearchList;
