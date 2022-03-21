import React from "react";
import classes from "./checkbox.module.css";

const Checkbox = ({ children }) => {
  return (
    <div className={classes.body}>
      <input id={`${children}`} type="checkbox" name="checkbox" />
      <label htmlFor={`${children}`}>{children}</label>
    </div>
  );
};

export default Checkbox;
