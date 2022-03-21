import React from "react";
import classes from "./choose.module.css";

const Choose = ({ children }) => {

  return (
    <div className={classes.body}>
      {children}
    </div>
  );
};

export default Choose;
