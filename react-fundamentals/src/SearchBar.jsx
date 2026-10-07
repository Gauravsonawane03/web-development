function SearchBar(props) {
  return (
    <div>
    <input
  value={props.value}
  onChange={(event) => {
    props.onSearch(event.target.value);
  }}
     />
    </div>
  );
}

export default SearchBar;