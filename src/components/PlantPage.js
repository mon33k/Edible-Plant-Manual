import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../stylesheets/PlantPage.css";

const PlantPage = () => {
  const location = useLocation();
  const { from } = location.state;
  const imgList = Array.from(Array(from["# pics"] + 1).keys()).slice(1);
  console.log(from);

  const getSpecificImgPath = imgList.map((num) => {
    // Some file paths have a space, or begins with a lowercase instead of capitalized
    let filePath = require(`../api/dataset/${from.Name}/${
      num !== 1 ? from.Name + num + ".jpg" : from.Name + ".jpg"
    }`);

    if (from.Name)
      return (
        <Image
          rounded="true"
          src={filePath}
          key={Math.random(num)}
          fluid="true"
        />
      );
  });

  return (
    <>
      <Container fluid="md">
        <Row>
          <Col className="img-container">{getSpecificImgPath}</Col>
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
