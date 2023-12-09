import React from "react";

function CheckboxComponent({ label, name, checked, onChange }) {
  return (
    <div className={`Checkbox${name} my-4 flex items-center `}>
      <label
        htmlFor={name}
        className="ml-px block text-sm font-medium leading-6 pl-4 text-left"
      >
        {label}
      </label>
      <input
        className="item-center ml-4 text-sm"
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
