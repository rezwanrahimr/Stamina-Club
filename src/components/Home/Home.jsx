import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Services from "../Services/Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

const Home = () => {
  // get previous break time from local storage.
  let getStorageBreakTime = localStorage.getItem("breakTime");
  const [services, setServices] = useState([]);
  const [breakTime, setBreakTime] = useState(getStorageBreakTime);
  const [exerciseTime, setExerciseTimes] = useState([]);

  let totalTime = 0;
  const notify = () => toast.success("Successful!");

  // Load Services
  useEffect(() => {
    fetch("../../../data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Exercise Time
  const handleTime = (service) => {
    const newExercise = [...exerciseTime, service];
    setExerciseTimes(newExercise);
  };

  //Get Exercise Time from Local Storage.
  const exercise = localStorage.getItem("exercise-time");
  for (const time of exerciseTime) {
    totalTime = totalTime + parseInt(time.time);

    if (!exercise) {
      localStorage.setItem("exercise-time", totalTime);
    } else {
      localStorage.setItem("exercise-time", totalTime);
      totalTime = parseInt(exercise);
    }
  }

  /*...................
  break time
  ....................*/

  if (!getStorageBreakTime) {
    localStorage.setItem("breakTime", breakTime);
  } else {
    localStorage.setItem("breakTime", breakTime);
  }

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
            <Services
              key={service.id}
              service={service}
              handleTime={handleTime}
              exerciseTime={exerciseTime}
            ></Services>
          ))}
        </div>
      </div>

      {/* ....................... 
               Cart Start
      ........................... */}
      <div className="cart">
        <div className="user-info">
          <div style={{ width: "40%" }}>
            <img
              src="https://images.saymedia-content.com/.image/t_share/MTc0MjEyMzU5NTc1ODQwMjUy/how-to-be-a-gentleman-a-begginers-guide.jpg"
              alt="Rezwan Rahim"
            />
          </div>
          <div style={{ width: "60%" }}>
            <h5 className="fw-bold">Rezwan Rahim</h5>
            <small className="fw-bold">
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
          {breakTime == 10 ? (
            <Button
              className="rounded-circle bg-primary text-white"
              onClick={() => setBreakTime(10)}
            >
              10s
            </Button>
          ) : (
            <Button className="rounded-circle" onClick={() => setBreakTime(10)}>
              10s
            </Button>
          )}
          {breakTime == 20 ? (
            <Button
              className="rounded-circle bg-primary text-white"
              onClick={() => setBreakTime(20)}
            >
              20s
            </Button>
          ) : (
            <Button className="rounded-circle" onClick={() => setBreakTime(20)}>
              20s
            </Button>
          )}

          {breakTime == 30 ? (
            <Button
              className="rounded-circle bg-primary text-white"
              onClick={() => setBreakTime(30)}
            >
              30s
            </Button>
          ) : (
            <Button className="rounded-circle" onClick={() => setBreakTime(30)}>
              30s
            </Button>
          )}
          {breakTime == 40 ? (
            <Button
              className="rounded-circle bg-primary text-white"
              onClick={() => setBreakTime(40)}
            >
              40s
            </Button>
          ) : (
            <Button className="rounded-circle" onClick={() => setBreakTime(40)}>
              40s
            </Button>
          )}
          {breakTime == 50 ? (
            <Button
              className="rounded-circle bg-primary text-white"
              onClick={() => setBreakTime(50)}
            >
              50s
            </Button>
          ) : (
            <Button className="rounded-circle" onClick={() => setBreakTime(50)}>
              50s
            </Button>
          )}
        </div>
        <h6 className="ms-4 pt-2">Exercise Details</h6>
        <div className="exercise-time">
          <span className="fw-bold me-5">Exercise time</span>
          <span className="ms-5">{totalTime}</span>
          <span> seconds</span>
        </div>
        <div className="break-time">
          <span className="fw-bold me-5">Break time </span>
          <span className="ms-5">{breakTime}</span>
          <span> seconds</span>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="completed-btn  bg-primary text-white"
            onClick={notify}
          >
            Activity Completed
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
