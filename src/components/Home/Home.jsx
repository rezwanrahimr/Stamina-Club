import React, { useEffect, useState } from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import Services from "../Services/Services";
import user from "../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
      <div className="cart">
        <div className="user-info">
          <div style={{ width: "40%" }}>
            <img
              src="https://images.saymedia-content.com/.image/t_share/MTc0MjEyMzU5NTc1ODQwMjUy/how-to-be-a-gentleman-a-begginers-guide.jpg"
              alt="Rezwan Rahim"
            />
          </div>
          <div style={{ width: "60%" }}>
            <h5>Rezwan Rahim</h5>
            <small>
              <FontAwesomeIcon icon={faLocationDot} />
              <span></span>
              Dhaka,Bangladesh
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
