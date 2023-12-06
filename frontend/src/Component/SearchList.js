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
      <label
        htmlFor="name"
        className=" block  text-sm text font-medium leading-6 text-gray-900"
      >
        Name
      </label>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Mantou"
        className="block w-1/5 mx-auto  rounded-full border-0 px-4 py-1.5 text-gray-900 
        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
        focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <CardDisplay dogs={filteredDogs} />
    </div>
  );
}

export default SearchList;

<div className="mt-2">
  <input
    type="text"
    name="name"
    id="name"
    className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    placeholder="Jane Smith"
  />
</div>;
