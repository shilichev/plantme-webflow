import React from "react";
import classes from "./listContainer.module.css";

const ListContainer = ({ children, background }) => {
  const titleStyles = {
    background,
  };

  return (
    <div className={classes.body} style={titleStyles}>
      {children}
    </div>
  );
};

export default ListContainer;
