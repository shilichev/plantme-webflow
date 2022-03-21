import React from "react";
import Button from "../../components/button/button";
import classes from "./home.module.css";
import image from "../../data/images/messages.png";
import background from "../../data/images/background.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.body}>
      <img
        src={background}
        alt="messages"
        style={{ width: "calc(100%)", position: "absolute", zIndex: -1}}
      /> 
      <div className={classes.content}>
        <img
          src={image}
          alt="messages"
          style={{ width: "calc(100% - 16px)" }}
        />
        <Link to={"/wishes"}>
          <Button>Continue</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
