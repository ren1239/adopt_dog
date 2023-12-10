function InputComponent({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  tailwind,
  tailwindLabel,
}) {
  return (
    <div className={`Input${name} my-4`}>
      <label htmlFor={name} className={tailwindLabel}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={tailwind}
      />
    </div>
  );
}

export default InputComponent;
