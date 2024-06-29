import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BoxSelection.css"; // Import the CSS file for styling

const BoxSelection = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleSelectBox = (box) => {
    setSelectedBox(box);
  };

  const getLinkPath = () => {
    if (selectedBox === "box1") return "/hiring-dashboard";
    if (selectedBox === "box2") return "/freelance-dashboard";
    return "/";
  };

  return (
    <>

    <div className="boxContainer">
      <div>
        <div
          className={`box ${selectedBox === "box1" ? "selected" : ""}`}
          onClick={() => handleSelectBox("box1")}
        >
          <div className="left">
            <div className="topLeft">
              <p>Looking for a Talent</p>
              <p
                style={{
                  fontSize: "15px",
                  position: "relative",
                  top: "7px",
                  color: "#AAAAAA",
                  paddingLeft: "30px",
                }}
              >
                Hiring
              </p>
            </div>
            <p
              style={{
                color: "#d0d0d0",
                justifyContent: "left",
                display: "flex",
                fontFamily: "Neue-55roman",
                textAlign: "left",
                fontSize: "11px",
                position: "relative",
                top: "-10px",
                paddingLeft: "10px",
              }}
            >
              Looking for talents who will work for me
            </p>
          </div>
        </div>
      </div>

      <div className="boxContainer"></div>
      <div
        className={`box ${selectedBox === "box2" ? "selected" : ""}`}
        onClick={() => handleSelectBox("box2")}
      >
        <div className="right">
          <div className="topRight">
            <p>I'm a Talent</p>
            <p
              style={{
                fontSize: "15px",
                position: "relative",
                top: "7px",
                color: "#AAAAAA",
                paddingLeft: "10px",
              }}
            >
              Hire-me
            </p>
          </div>
          <p
            style={{
              color: "#d0d0d0",
              justifyContent: "left",
              display: "flex",
              fontFamily: "Neue-55roman",
              textAlign: "right",
              fontSize: "11px",
              paddingLeft: "10px",
              position: "relative",
              top: "-10px",
            }}
          >
            I'm looking for short term and long term jobs
          </p>
        </div>
        <div className="formContainer">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="spanContainer">
            <span>Don't have an account</span>
            <span>SIGN UP</span>
          </div>
        </div>
      </div>
    </div>
      <Link to={getLinkPath()}>
        <button  type ="submit" disabled={!selectedBox}>Login</button>
      </Link>
      </>
  ); 
};

export default BoxSelection;
