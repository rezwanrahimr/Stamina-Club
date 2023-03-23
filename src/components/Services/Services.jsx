import React from "react";
import Card from "react-bootstrap/Card";
import "./Services.css";

const Services = (props) => {
  const { handleTime, service, exerciseTime } = props;
  const { id, name, text, time, age, img } = service;

  // store selected service id.
  let addedItems = [];
  for (const selectedItems of exerciseTime) {
    addedItems.push(selectedItems.id);
  }

  return (
    <div>
      <Card style={{ width: "16rem" }} className="service-cart">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bolder">{name}</Card.Title>
          <Card.Text className="text">{text}</Card.Text>
          <p className="fw-bolder">For Age : {age}</p>
          <p className="fw-bolder">Time required : {time}s</p>
          {addedItems.includes(id) ? (
            <button
              className=" bg-success text-white"
              onClick={() => handleTime(service)}
            >
              Added
            </button>
          ) : (
            <button
              className="bg-primary text-white"
              onClick={() => handleTime(service)}
            >
              Add to list
            </button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Services;
