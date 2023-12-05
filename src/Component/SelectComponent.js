import React from "react";

function SelectComponent({ label, name, value, onChange, options }) {
  return (
    <div className={`Select${label}`}>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;
