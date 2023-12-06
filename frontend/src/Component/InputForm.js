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

const handleInputChange = (e) =>{
  const [name, value, files, checked,type] = e.target 
    if (type === 'checkbox'){
      setFormData((prev) =>({...prev , [name] : checked}))
    }
    else if (type === 'file') {
      setFormData((prev)=>({...prev , [name] : files[0]}))
    }
    else {
      setFormData((prev)=>({...prev , [name]:value}))
    }
}

  //   Function to handle clear data
  const handleClear = () => {
    setFormData(initialFormData);
  };

  //   Function to handle empty form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // Array of options for the select
  const OptionsToTen = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputComponent
          label="Name"
          type="text"
          name="name"
          placeholder="Charsiu"
          value={formData.name}
          onChange={handleInputChange}
        />

        <InputComponent
          label="Age"
          type="number"
          name="age"
          placeholder="3"
          value={formData.age}
          onChange={handleInputChange}
        />

        <InputComponent
          label="Location"
          type="text"
          name="location"
          placeholder="Huangpu,Shanghai"
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
          value={formData.description}
          onChange={handleInputChange}
          placeholder="300 word description"
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
}

export default InputForm;
