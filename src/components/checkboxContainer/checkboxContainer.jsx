import React from "react";
import classes from "./checkboxContainer.module.css";

const CheckboxContainer = ({ children }) => {
  return <div className={classes.body}>{children}</div>;
};

export default CheckboxContainer;
