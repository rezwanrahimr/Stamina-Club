import React from "react";
import Button from "react-bootstrap/Button";
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
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <p>{age}</p>
          <p>{time}</p>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Services;
