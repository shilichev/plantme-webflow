import React from "react";
import Button from "../../components/button/button";
import classes from "./plants_info.module.css";
import { Link } from "react-router-dom";
import Title from "../../components/title/title";
import thinking_face from "../../data/images/thinking-face.png";
import Back from "../../components/back/back";
import ProgressBar from "../../components/progressBar/progressBar";
import Checkbox from "../../components/checkbox/checkbox";
import ListContainer from "../../components/listContainer/listContainer";

import droplet from "../../data/images/droplet.png";
import scissors from "../../data/images/scissors.png";
import pill from "../../data/images/pill.png";
import potted from "../../data/images/potted.png";
import shower from "../../data/images/shower.png";
import sponge from "../../data/images/sponge.png";
import sun from "../../data/images/sun.png";
import catface from "../../data/images/cat-face.png";
import ListEmoji from "../../components/emojies/listEmoji/listEmoji";

const infoList = [
  { info: "Watered", emoji: droplet },
  { info: "Cut", emoji: scissors },
  { info: "Regularly fertilised", emoji: pill },
  { info: "Repotted", emoji: potted },
  { info: "Misted", emoji: shower },
  { info: "Dusted", emoji: sponge },
  { info: "Given enough sunlight ", emoji: sun },
  { info: "Checked for pests", emoji: catface },
];

const PlantsInfo = () => {
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <Back />
      </div>
      <div className={classes.main}>
        <ProgressBar completed={2}></ProgressBar>
        <Title fontSize="2.4rem">
          <div className={classes.title}>
            Did you know?
          </div>
        </Title>
        <div className={classes.container}>
          <ListContainer background="linear-gradient(256.77deg, #E0C3FC 2.78%, #7D97F4 107.73%)">
            <div className={classes.title_container}>
              Your plants need to be:
            </div>

            {infoList.map((item) => (
              <div className={classes.item} key={item.info}>
                <ListEmoji >
                  <img src={item.emoji} alt="" width="15px" height="15px" />
                </ListEmoji>

                {item.info}
              </div>
            ))}
          </ListContainer>
        </div>
      </div>

      <div className={classes.footer}>
        <Link to={`/watering`}>
          <Button>Got it!</Button>
        </Link>
      </div>
    </div>
  );
};

export default PlantsInfo;
