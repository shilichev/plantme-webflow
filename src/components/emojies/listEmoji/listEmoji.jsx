import React from "react";
import classes from "./listEmoji.module.css";

const ListEmoji = ({ children }) => {
  return (
    <div className={classes.body}>
      {children}
    </div>
  );
};

export default ListEmoji;
