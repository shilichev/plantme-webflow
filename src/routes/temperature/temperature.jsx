import React from "react";
import classes from "./temperature.module.css";
import Title from "../../components/title/title";
import Back from "../../components/back/back";
import ProgressBar from "../../components/progressBar/progressBar";
import Choose from "../../components/choose/choose";
import { Link } from "react-router-dom";

const Temperature = () => {
  const content = ["Yes, the temperature is right", "I need some information"];

  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <Back />
      </div>
      <div className={classes.main}>
        <ProgressBar completed={6}></ProgressBar>
        <Title fontSize="2.4rem">
          <div className={classes.title}>
            Do you know <br /> the right temperature your <br /> plant needs?{" "}
          </div>
        </Title>
        {content.map((item) => (
          <Link to={"/pets"} key={item}>
            <Choose>{item}</Choose>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Temperature;
