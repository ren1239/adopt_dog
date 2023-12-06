import React from "react";

function CheckboxComponent({ label, name, checked, onChange }) {
  return (
    <div className={`Checkbox${name}`}>
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default CheckboxComponent;
