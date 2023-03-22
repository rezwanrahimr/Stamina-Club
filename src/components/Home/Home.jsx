import React, { useEffect, useState } from "react";
import "./Home.css";
import logo from "../../assets/pngtree-sport-gym-logo-bodybuilder-with-big-muscles-posing-isolated-vector-silhouette-image_322192-removebg-preview.png";
import Services from "../Services/Services";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("../../../public/data")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="home-container">
      <div className="services-container">
        <div className="header-container">
          <img src={logo} alt="" />
          <h1>STAMINA-CLUB</h1>
        </div>
        <h3>Select today’s exercise</h3>
        <div className="services">
          {services.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>
      </div>
      <div className="cart"></div>
    </div>
  );
};

export default Home;
