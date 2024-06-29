import React from "react";
import "./Selector.css";

const Selector = () => {
  return (
    <div className="selectorContainer">
      <div className="header">
        <h3>Highly Skilled Web Developer</h3>
        <p>2 days ago! </p>
      </div>
      <hr style={{ width: "98%", borderColor: "#747474" }} />

      <div class="parent">
        <div className="leftDiv">
          <p>John Doe</p>
          <p>John Doe</p>
          <p>John Doe</p>
          <p>John Doe</p>
          <p>John Doe</p>
          <p>John Doe</p>
          <p>John Doe</p>
          <p>John Doe</p>
        </div>
        <div className="middleDiv">
          <p>Selected</p>
          <p>Not Selected</p>
          <p>Selected</p>
          <p>Not Selected</p>
          <p>Selected</p>
          <p>Not Selected</p>
          <p>Selected</p>
          <p>Not Selected</p>
        </div>
        <div className="rightDiv">
            <button>Not Pay</button>  
            <button>Not Pay</button>  
            <button>Not Pay</button>  
            <button>Not Pay</button>  
            <button>Not Pay</button>  
            <button>Not Pay</button>  
            <button>Not Pay</button>  
            <button>Not Pay</button>  

        </div>
      </div>
    </div>
  );
};

export default Selector;
