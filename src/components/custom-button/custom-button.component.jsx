import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ disabled, children, red, ...otherProps }) => (
  <button
    className={`${disabled ? "disabled" : ""} ${
      red ? "red" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
