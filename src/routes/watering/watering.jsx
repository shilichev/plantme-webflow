import React from "react";
import classes from "./watering.module.css";
import Title from "../../components/title/title";
import Back from "../../components/back/back";
import ProgressBar from "../../components/progressBar/progressBar";
import Choose from "../../components/choose/choose";
import { Link } from "react-router-dom";

const Watering = () => {
  const content = ["Sometimes", "Never", "Usually I forget"];

  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <Back />
      </div>
      <div className={classes.main}>
        <ProgressBar completed={3}></ProgressBar>
        <Title fontSize="2.4rem">
          <div className={classes.title}>
            Have you ever forgotten to water your plant?
          </div>
        </Title>
        {content.map((item) => (
          <Link to={"/care_info"} key={item}>
            <Choose>{item}</Choose>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Watering;
