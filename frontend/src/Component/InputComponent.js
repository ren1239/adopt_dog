function InputComponent({ label, type, name, placeholder, value, onChange }) {
  return (
    <div className={`Input${name}`}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputComponent;
