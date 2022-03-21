import React from "react";
import classes from "./back.module.css";
import back from "../../data/images/back.png";

const Back = () => {
  return (
    <div className={classes.back} onClick={() => window.history.back()}>
      <img
        src={back}
        alt="back"
        style={{ width: "1.1rem", height: "1.7rem", paddingRight: "2.4rem" }}
      />
      Back
    </div>
  );
};

export default Back;
