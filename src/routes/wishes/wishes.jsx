import React from "react";
import Button from "../../components/button/button";
import classes from "./wishes.module.css";
import { Link } from "react-router-dom";
import Title from "../../components/title/title";
import thinking_face from "../../data/images/thinking-face.png";
import Back from "../../components/back/back";
import ProgressBar from "../../components/progressBar/progressBar";
import CheckboxContainer from "../../components/checkboxContainer/checkboxContainer";
import Checkbox from "../../components/checkbox/checkbox";

const checkboxTitles = [
  "Identify plants",
  "Get reminders on watering, etc",
  "Identify plant's diseases",
  "Track my plant's growth",
  "Know if my plant is toxic",
  "Know if my plant is healthy",
];

const Wishes = () => {

  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <Back />
      </div>
      <div className={classes.main}>
        <ProgressBar completed={1}></ProgressBar>
        <Title fontSize="2.4rem">
          <div className={classes.title}>
            <img
              src={thinking_face}
              alt="thinking-face"
              style={{ width: "3.6rem", height: "3.6rem", paddingRight: "14px" }}
            />
            I want to...
          </div>
        </Title>
        <div className={classes.container}>
          <CheckboxContainer>
            {checkboxTitles.map((title) => (
              <Checkbox key={title}>{title}</Checkbox>
            ))}
          </CheckboxContainer>
        </div>
      </div>

      <div className={classes.footer}>
        <Link to={`/plants_info`}>
          <Button>Continue</Button>
        </Link>
      </div>
    </div>
  );
};

export default Wishes;
