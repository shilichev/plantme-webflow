import React from "react";
import Button from "../../components/button/button";
import classes from "./care_info.module.css";
import { Link } from "react-router-dom";
import Title from "../../components/title/title";
import thinking_face from "../../data/images/thinking-face.png";
import Back from "../../components/back/back";
import ProgressBar from "../../components/progressBar/progressBar";
import ListContainer from "../../components/listContainer/listContainer";

const infoList = [
  "Cut back on watering",
  "Don't add any fertilizers",
  "Maintain optimal humidity levels so the plant doesn't dry out",
  "Pruning is also possible if your plant has some old woody growths",
];

const CareInfo = () => {
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <Back />
      </div>
      <div className={classes.main}>
        <ProgressBar completed={4}></ProgressBar>
        <Title fontSize="22px">
          <div className={classes.title}>
            Do you know how <br /> to care for plants during a <br /> dormant period?{" "}
          </div>
        </Title>
        <div className={classes.container}>
          <ListContainer background=" linear-gradient(256.47deg, #F7BF97 -37.28%, #FC7E76 83.82%)">
            <ul>
              {infoList.map((item) => (
                <li key={item}>
                  <div className={classes.item}>{item}</div>
                </li>
              ))}
            </ul>
          </ListContainer>
        </div>
      </div>

      <div className={classes.footer}>
        <Link to={`/sick`}>
          <Button>Got it!</Button>
        </Link>
      </div>
    </div>
  );
};

export default CareInfo;
