import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "../stylesheets/Home.css";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Carousel variant="dark">
          <Carousel.Item>
            <Row>
              <Col>
                <img
                  className="carousel-item-img"
                  src="https://i.pinimg.com/originals/52/05/58/520558f5d77f4f62b7e5c77bc656b65f.jpg"
                  alt="First slide"
                />
              </Col>
              <Col>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <img
                  className="carousel-item-img"
                  src="https://i.pinimg.com/236x/a3/0c/f0/a30cf0952d4f9fed0c0fe4a1d3378e13.jpg"
                  alt="Second slide"
                />
              </Col>
              <Col>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <img
                  className="carousel-item-img"
                  src="https://i.pinimg.com/236x/40/76/a8/4076a8b64dd44c6293c0c610231eead2.jpg"
                  alt="Third slide"
                />
              </Col>
              <Col>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
};

export default Home;
