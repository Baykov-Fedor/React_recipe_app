import React, { useState } from "react";

import "./search-bar.styles.scss";

const SearchBar = (props) => {
  const [userInput, setUserInput] = useState("");
  const findRecipe = (e) => {
    e.preventDefault();
    props.search(userInput);
    setUserInput("");
  };
  const onChange = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <form className="form-inline" onSubmit={findRecipe}>
      <label className="navbar--search--label">find a recipe: </label>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={onChange}
        value={userInput}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
