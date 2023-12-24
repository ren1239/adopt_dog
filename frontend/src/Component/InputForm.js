import React from "react";
import { useState } from "react";
import InputComponent from "./InputComponent";
import CheckboxComponent from "./CheckboxComponent";
import SelectComponent from "./SelectComponent";
import PictureUploadComponent from "./PictureUploadComponent";

function InputForm() {
  // Function check form is filled
  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.age.trim() &&
      formData.location.trim() &&
      formData.description.trim()
    );
  };

  // Database form logic

  const initialFormData = {
    name: "",
    age: "",
    location: "",
    sex: "",
    neutered: false,
    friendly: "",
    energetic: "",
    trainability: "",
    sociable: "",
    grooming: "",
    picture: null, // Assuming it's a file
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value, files, checked, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  //   Function to handle clear data
  const handleClear = () => {
    setFormData(initialFormData);
  };

  //   Function to handle empty form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      console.log("Form is not valid");
      // Optionally, show an error message to the user here
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:8080/dogs", {
        method: "POST",
        body: formDataToSend,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status : ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      // Handle success here
      handleClear(); // Clear the form on successful submission
    } catch (error) {
      console.error("error submitting form", error);
      // Handle error here
    }
  };

  // Array of options for the select
  const OptionsToTen = Array.from({ length: 10 }, (_, i) => i + 1);

  // State to mannage the current form page
  const [currentPage, setCurrentPage] = useState(1);

  // Function to select the page
  const switchPage = (page) => {
    setCurrentPage(page);
  };
  const renderNavigationButtons = () => {
    const pages = [1, 2, 3]; // assuming you have 3 pages
    return (
      <div className="flex justify-center space-x-2 mb-4">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => switchPage(page)} // Corrected to a function
            className={`rounded-full px-8 py-1 ${
              currentPage === page
                ? "bg-primary text-white"
                : "border-primary shadow-sm bg-white"
            }`}
          ></button>
        ))}
      </div>
    );
  };

  const renderFormPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div>
            <InputComponent
              label="Name"
              type="text"
              name="name"
              placeholder="Name"
              tailwindLabel="ml-px block text-sm font-medium leading-6 pl-4 text-left "
              tailwind="block w-full rounded-full border px-4 "
              value={formData.name}
              onChange={handleInputChange}
            />

            <InputComponent
              label="Age"
              type="number"
              name="age"
              placeholder="age"
              tailwindLabel="ml-px block text-sm font-medium leading-6 pl-4 text-left"
              tailwind="block w-full rounded-full border px-4 "
              value={formData.age}
              onChange={handleInputChange}
            />

            <InputComponent
              label="Location"
              type="text"
              name="location"
              placeholder="Huangpu,Shanghai"
              tailwindLabel="ml-px block text-sm font-medium leading-6 pl-4 text-left"
              tailwind="block w-full rounded-full border px-4 "
              value={formData.location}
              onChange={handleInputChange}
            />
            <SelectComponent
              label="Sex"
              name="sex"
              value={formData.sex}
              onChange={handleInputChange}
              options={["male", "female"]}
            />

            <CheckboxComponent
              label="Neutered"
              name="neutered"
              checked={formData.neutered}
              onChange={handleInputChange}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <SelectComponent
              label="Trainability"
              name="trainability"
              value={formData.trainability}
              onChange={handleInputChange}
              options={OptionsToTen}
            />

            <SelectComponent
              label="Sociable"
              name="sociable"
              value={formData.sociable}
              onChange={handleInputChange}
              options={OptionsToTen}
            />

            <SelectComponent
              label="Grooming"
              name="grooming"
              value={formData.grooming}
              onChange={handleInputChange}
              options={OptionsToTen}
            />

            <SelectComponent
              label="Friendliness"
              name="friendliness"
              value={formData.friendliness}
              onChange={handleInputChange}
              options={OptionsToTen}
            />

            <SelectComponent
              label="Energetic"
              name="energetic"
              value={formData.energetic}
              onChange={handleInputChange}
              options={OptionsToTen}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <PictureUploadComponent
              label="Upload Picture"
              name="picture"
              onChange={handleInputChange}
            />
            <label>Description</label>
            <textarea
              name="description"
              className="ml-px block text-sm font-medium leading-6 pl-4 text-left w-full rounded-xl"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="300 word description"
            />
            <div className="flex  justify-between my-4">
              <button
                type="button"
                onClick={handleClear}
                className="rounded-full  border-primary  shadow-sm  bg-white px-3 py-1 hover:bg-primary"
              >
                Clear
              </button>
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`rounded-full ml-2 border-primary  border-2 shadow-sm px-3 py-1 w-full
      ${
        isFormValid()
          ? " bg-primary text-white hover:bg-white hover:border-2 hover:text-dark"
          : " bg-medium cursor-not-allowed text-white hover:bg-dark"
      }`}
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" flex justify-center bg-gray-100 pt-8 w-3/4 mx-auto py-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md md:px-20 bg-lightest shadow-md
        rounded-2xl border border-light "
      >
        <h2 className="text-5xl font-extralight font-newsreader text-center md:text-cente py-4">
          Input Data
        </h2>
        {renderNavigationButtons()} {/* Render navigation buttons */}
        {renderFormPage()} {/* Render the current form page */}
      </form>
    </div>
  );
}

export default InputForm;
