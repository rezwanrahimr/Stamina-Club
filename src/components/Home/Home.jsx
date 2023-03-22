import React, { useEffect, useState } from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import Services from "../Services/Services";
import user from "../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

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
        <div className="body-info d-flex justify-content-around">
          <div>
            <span className="fs-4 fw-bolder"> 55</span>{" "}
            <span style={{ fontSize: ".9rem", opacity: "50%" }}>kg</span>
            <br />
            <span style={{ fontSize: ".9rem", opacity: "50%" }}>Weight</span>
          </div>
          <div>
            <span className="fs-4 fw-bolder"> 5.5</span>
            <br />
            <span style={{ fontSize: ".9rem", opacity: "50%" }}>Height</span>
          </div>
          <div>
            <span className="fs-4 fw-bolder"> 25</span>{" "}
            <span style={{ fontSize: ".9rem", opacity: "50%" }}>yrs</span>
            <br />
            <span style={{ fontSize: ".9rem", opacity: "50%" }}>Age</span>
          </div>
        </div>
        <h6 className="ms-4">Add A Break</h6>
        <div className="add-break">
          <Button className="rounded-circle">10s</Button>
          <Button className="rounded-circle">20s</Button>
          <Button className="rounded-circle">30s</Button>
          <Button className="rounded-circle">40s</Button>
          <Button className="rounded-circle">50s</Button>
        </div>
        <h6 className="ms-4 pt-2">Exercise Details</h6>
        <div className="exercise-time">
          <span className="fw-bold me-5">Exercise time</span>
          <span className="ms-5">0</span>
          <span> seconds</span>
        </div>
        <div className="break-time">
          <span className="fw-bold me-5">Break time </span>
          <span className="ms-5">0</span>
          <span> seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
