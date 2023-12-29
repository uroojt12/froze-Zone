import React from "react";

const Tab1 = () => {
  return (
    <div className="flex">
      <div className="col">
        <div className="inner">
          <a href="work-detail.php">
            <div className="image">
              <img src="images/fl-4.jpeg" alt="" />
            </div>
          </a>
          <div className="text">
            <a href="work-detail.php">
              <h4> Product Engineering </h4>
            </a>
            <div className="category">CLOUD SERVICES</div>
            <p>
              {" "}
              We have the experience and the knowhow to help ensure effective
              decision-making, whether you are looking.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="inner">
          <a href="work-detail.php">
            <div className="image">
              <img src="images/fl-2.jpeg" alt="" />
            </div>
          </a>
          <div className="text">
            <a href="work-detail.php">
              <h4> Firewall Advance </h4>
            </a>
            <div className="category">IT SECURITY</div>
            <p>
              {" "}
              We have the experience and the knowhow to help ensure effective
              decision-making, whether you are looking.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="inner">
          <a href="work-detail.php">
            <div className="image">
              <img src="images/fl-3.jpeg" alt="" />
            </div>
          </a>
          <div className="text">
            <a href="work-detail.php">
              <h4> Data Management </h4>
            </a>
            <div className="category">NETWORKING</div>
            <p>
              {" "}
              We have the experience and the knowhow to help ensure effective
              decision-making, whether you are looking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
