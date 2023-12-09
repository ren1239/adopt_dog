import React from "react";
import { useState } from "react";
import InputComponent from "./InputComponent";
import CheckboxComponent from "./CheckboxComponent";
import SelectComponent from "./SelectComponent";
import PictureUploadComponent from "./PictureUploadComponent";

function InputForm() {
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

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked, files } = e.target;
  //   if (type === "checkbox") {
  //     setFormData((prev) => ({ ...prev, [name]: checked }));
  //   } else if (type === "file") {
  //     setFormData((prev) => ({ ...prev, [name]: files[0] }));
  //   } else {
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   }
  // };

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
    try {
      const response = await fetch("http://localhost:3000/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status : ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      // Handle success here (e.g., display a success message)

      handleClear(); // Optionally clear the form on successful submission
    } catch (error) {
      console.error("error submitting form", error);
      // Handle error here (e.g., display an error message)
    }

    console.log(formData);
  };

  // Array of options for the select
  const OptionsToTen = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className=" flex justify-center items-center min-h-screen bg-gray-100 flex-col ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md  p-10 px-20 bg-lightest shadow-md  rounded-2xl border border-light "
      >
        <h2 className="text-5xl font-extralight font-newsreader text-center md:text-cente py-4">
          Input Data
        </h2>
        <InputComponent
          label="Name"
          type="text"
          name="name"
          placeholder="Charsiu"
          tailwindLabel="ml-px block text-sm font-medium leading-6 pl-4 text-left "
          tailwind="block w-full rounded-full border px-4 "
          value={formData.name}
          onChange={handleInputChange}
        />

        <InputComponent
          label="Age"
          type="number"
          name="age"
          placeholder="3"
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
            className="rounded-full  border-primary  shadow-sm  bg-primary px-3 py-1 hover:bg-white hover:border-2 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
