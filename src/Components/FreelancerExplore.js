import React, { useState } from "react";
import "./FreelancerExplore.css";

// import img1 from "../assets/images/img1.png";
// import img2 from "../assets/images/img2.png";
// import img3 from "../assets/images/img3.png";
// import img4 from "../assets/images/img4.png";
// import img5 from "../assets/images/img5.png";
// import img6 from "../assets/images/img6.png";

const FreelancerExplore = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      setIsApplied(true);
    }, 2000); // Simulate a 2-second loading time
  };

  return (
    <div className="freelancerExploreContainer">
      <div className="freelancerExploreHeader">
        <div className="logo">
          <p>BountyX</p>
        </div>
        <div className="nav">
          <p>You are viewing this page as Freelancer</p>
          <p>Dashboard</p>
        </div>
      </div>
      <div class="Feedcontainer">
        <div className="buttons"></div>
        <div className="Cards">
          <div className="card">
            {/* <img src={img1} alt="" /> */}
            <p>Looking for Modern and Trendy Designer</p>
            <p style={{ fontSize: "15px" }}>User Name</p>
            <p style={{ fontSize: "18px" }}> 5 ETH</p>
            <div>
              <button
                className="button"
                onClick={handleClick}
                disabled={isApplied}
              >
                {isApplied ? "Applied" : "Apply"}
                {isLoading && <span className="loader"></span>}
              </button>
              {isApplied && (
                <p style={{ fontSize: "11px" }}>
                  Thank you for applying! The lister may get back to you soon.
                </p>
              )}
            </div>
          </div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 4</div>
          <div className="card"> Card 5</div>
          <div className="card">Card 6</div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerExplore;
