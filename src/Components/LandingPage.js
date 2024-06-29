import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box1 from "./Box1";
import Box2 from "./Box2";
import BoxSelection from "./BoxSelection";

const LandingPage = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleSelectBox = (box) => {
    setSelectedBox(box);
  };

  const getLinkPath = () => {
    if (selectedBox === "box1") return "/box1";
    if (selectedBox === "box2") return "/box2";
    return "/";
  };

  return (
    <div className="LandingPageContainer">
      <h1 className="header-Text">BountyX</h1>
      <p className="header-message">Sign up for the experience</p>
      <div className="boxContainer">
        <BoxSelection />
        <div>
          <div
            className={`box ${selectedBox === "box1" ? "selected" : ""}`}
            onClick={() => handleSelectBox("box1")}
          >
            Box 1
          </div>
          <div
            className={`box ${selectedBox === "box2" ? "selected" : ""}`}
            onClick={() => handleSelectBox("box2")}
          >
            Box 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
