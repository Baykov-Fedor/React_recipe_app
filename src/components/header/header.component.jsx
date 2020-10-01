import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar.component";

import "./header.styles.scss";

const Header = ({ search, badRequest }) => (
  <nav className="navbar navbar-light bg-light">
    <Link to="/">
      <span className="navbar--brand" onClick={() => badRequest(false)} />
    </Link>
    <div className="navbar--controls">
      <SearchBar search={search} />
      <Link to="/favorite_recipes" className="navbar--controls--saved">
        <i className="far fa-heart" style={{ fontSize: "1.4rem" }} />
        <span style={{ fontSize: "0.8rem" }}>Saved</span>
      </Link>
    </div>
  </nav>
);

export default Header;
