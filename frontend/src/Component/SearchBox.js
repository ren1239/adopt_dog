const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div>
      <input
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={className}
      />
    </div>
  );
};

export default SearchBox;
