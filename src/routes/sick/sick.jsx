import React from "react";
import classes from "./sick.module.css";
import Title from "../../components/title/title";
import Back from "../../components/back/back";
import ProgressBar from "../../components/progressBar/progressBar";
import Choose from "../../components/choose/choose";
import { Link } from "react-router-dom";

const Sick = () => {
  const content = [
    "Yes, I want to have care guide",
    "My plants don't usually get sick",
    "I know how to take care of plants",
  ];

  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <Back />
      </div>
      <div className={classes.main}>
        <ProgressBar completed={5}></ProgressBar>
        <Title fontSize="2.8rem">
          <div className={classes.title}>Have your plant ever <br></br> been sick? </div>
        </Title>
        {content.map((item) => (
          <Link to={"/temperature"} key={item}>
            <Choose>{item}</Choose>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sick;
