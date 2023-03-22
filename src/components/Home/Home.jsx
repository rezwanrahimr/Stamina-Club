import React from "react";
import "./Home.css";
import logo from "../../assets/pngtree-sport-gym-logo-bodybuilder-with-big-muscles-posing-isolated-vector-silhouette-image_322192-removebg-preview.png";

const Home = () => {
  return (
    <div>
      <div>
        <div className="header-container">
          <img src={logo} alt="" />
          <h1>STAMINA-CLUB</h1>
        </div>
        <h3>Select today’s exercise</h3>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
