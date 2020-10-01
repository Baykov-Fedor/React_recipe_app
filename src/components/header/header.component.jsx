import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar.component";

import "./header.styles.scss";

const Header = ({ search, badRequest }) => (
  <nav className="navbar navbar-light bg-light">
    <Link to="/">
      <span className="navbar--brand" onClick={() => badRequest(false)} />
    </Link>
    <SearchBar search={search} />
  </nav>
);

export default Header;
