import React from "react";
import classes from "./progressBar.module.css";

const ProgressBar = (props) => {
  const { completed } = props;

  const fillerStyles = {
    height: "100%",
    width: `${completed * 10}%`,
    backgroundColor: "#39c8a6",
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div className={classes.body}>
      <div className={classes.title}>
        {completed} <div style={{ color: "#828282" }}>/10</div>
      </div>
      <div className={classes.container}>
        <div style={fillerStyles}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
