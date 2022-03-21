import "./App.css";
import MobileViewLayout from "react-mobile-layout";
import { useEffect, useState } from "react";

import Home from "./routes/home/home";

import { Route, Routes } from "react-router-dom";
import Wishes from "./routes/wishes/wishes";
import PlantsInfo from "./routes/plants_info/plants_info";
import Watering from "./routes/watering/watering";
import CareInfo from "./routes/care_info/care_info";
import Sick from "./routes/sick/sick";
import Temperature from "./routes/temperature/temperature";
import Pets from "./routes/pets/pets";
import Toxic from "./routes/toxic/toxic";

function App() {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [height, setHeight] = useState(document.documentElement.clientHeight);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(document.documentElement.clientWidth);
      setHeight(document.documentElement.clientHeight);
    });
  }, []);
  return (
    <div
      style={{
        width: width,
        height: height,
        overflowY: "hidden",
      }}
      className="project_classes"
    >
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="wishes" element={<Wishes />} />
        <Route path="plants_info" element={<PlantsInfo />} />
        <Route path="watering" element={<Watering />} />
        <Route path="care_info" element={<CareInfo />} />
        <Route path="sick" element={<Sick />} />
        <Route path="temperature" element={<Temperature />} />
        <Route path="pets" element={<Pets />} />
        <Route path="toxic" element={<Toxic />} />
      </Routes>
    </div>
  );
}

export default App;
