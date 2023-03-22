import React from "react";
import Card from "react-bootstrap/Card";
import "./Services.css";

const Services = (props) => {
  const { id, name, text, time, age, img } = props.service;
  console.log(props.service);
  return (
    <div>
      <Card style={{ width: "16rem" }} className="service-cart">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bolder">{name}</Card.Title>
          <Card.Text className="text">{text}</Card.Text>
          <p className="fw-bolder">For Age : {age}</p>
          <p className="fw-bolder">Time required : {time}s</p>

          <button>Add to list</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Services;
