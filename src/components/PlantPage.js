import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../stylesheets/PlantPage.css";
import { ImageContext } from "../provider/imageContext";

const PlantPage = () => {
  const plantImagePaths = useContext(ImageContext);

  const location = useLocation();
  const { from } = location.state;
  const plantPathArr = plantImagePaths.getPlantImgs(from);

  console.log("plantPathArr", plantPathArr);

  return (
    <>
      <Container fluid="md">
        <Row>
          <Col className="img-container">
            {plantPathArr.map((plant, i) => plant)}
          </Col>
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
