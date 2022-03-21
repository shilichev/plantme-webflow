import React from "react";
import classes from "./title.module.css";

const Title = ({ children, fontSize }) => {
  const titleStyles = {
    fontSize,
  };

  return (
    <div className={classes.body} style={titleStyles}>
      {children}
    </div>
  );
};

export default Title;
