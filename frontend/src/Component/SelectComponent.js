import React from "react";

function SelectComponent({ label, name, value, onChange, options }) {
  return (
    <div className={`Select${label} my-4`}>
      <label
        htmlFor={name}
        className="ml-px block text-sm font-medium leading-6 pl-4 text-left"
      >
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="block w-full rounded-full border px-4 text-sm "
      >
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
