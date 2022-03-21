import React from "react";
import classes from "./toxic.module.css";
import Title from "../../components/title/title";
import Back from "../../components/back/back";
import ProgressBar from "../../components/progressBar/progressBar";
import Choose from "../../components/choose/choose";
import { Link } from "react-router-dom";

const Toxic = () => {
  const content = ["Yes. I'm careful", "I need assistance", "No. I'm sure"];

  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <Back />
      </div>
      <div className={classes.main}>
        <ProgressBar completed={8}></ProgressBar>
        <Title fontSize="2.8rem">
          <div className={classes.title}>
            Do you know if your <br /> plants are toxic?
          </div>
        </Title>
        {content.map((item) => (
          <Link to={"/"} key={item}>
            <Choose>{item}</Choose>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Toxic;
