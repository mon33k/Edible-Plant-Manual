import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const fs = require("fs");

const PlantPage = () => {
  const location = useLocation();
  const { from } = location.state;
  const imgList = Array.from(Array(from["# pics"] + 1).keys()).slice(1);
  console.log(from);

  const getSpecificImgPath = imgList.map((num) => {
    let filePath = require(`../api/dataset/${from.Name}/${
      num !== 1 ? from.Name + num + ".jpg" : from.Name + ".jpg"
    }`);

    if (from.Name)
      return <img src={filePath} width="100vw" key={Math.random(num)} />;
  });

  return (
    <>
      <Container fluid="md">
        <Row>
          <Col>{getSpecificImgPath}</Col>
          <Col>
            <h2>{from.Name}</h2>
            <h4>{from["Scientific name"]}</h4>
            <p>{from.Description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlantPage;
