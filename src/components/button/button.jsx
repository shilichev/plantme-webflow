import React from "react";
import classes from "./button.module.css";

const Button = ({children}) => {
  return <div className={classes.body}>{children}</div>;
};

export default Button