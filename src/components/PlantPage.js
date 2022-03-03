import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const PlantPage = () => {
  const location = useLocation();
  const { from } = location.state;
  const imgList = Array.from(Array(from["# pics"] + 1).keys());

  imgList.forEach((num) => {
    console.log("num", `../api/dataset/${from.Name}/${from.Name + num}`);
    // <img src={`../api/dataset/${from.Name}/${from.Name + num}`}></img>
  });

  return (
    <>
      <Container fluid="md">
        <Row>
          <Col>
            {imgList.forEach((num) => (
              <img
                src={`../api/dataset/Alfalfa/Alfalfa2.jpg`}
                width="500"
                height="600"
              />
            ))}
          </Col>
          <Col>{from.Description}</Col>
        </Row>
      </Container>
    </>
  );
};

export default PlantPage;
