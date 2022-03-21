import React from "react";
import classes from "./pets.module.css";
import Title from "../../components/title/title";
import Back from "../../components/back/back";
import ProgressBar from "../../components/progressBar/progressBar";
import Choose from "../../components/choose/choose";
import { Link } from "react-router-dom";

const Pets = () => {
  const content = ["No", "Dog", "Puppy", "Cat", "Other"];

  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <Back />
      </div>
      <div className={classes.main}>
        <ProgressBar completed={7}></ProgressBar>
        <Title fontSize="2.8rem">
          <div className={classes.title}>Do you have pets?</div>
        </Title>
        {content.map((item) => (
          <Link to={"/toxic"} key={item}>
            <Choose >{item}</Choose>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pets;
