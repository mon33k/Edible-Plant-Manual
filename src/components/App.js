import React, { useContext } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
  NavDropdown,
  Nav,
  Offcanvas,
  Navbar,
} from "react-bootstrap";
import "../stylesheets/App.css";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./Search";
import Index from "./IndexOfPlants";
import Favorites from "./Favorites";

import { ApiProvider, ApiContext } from "../provider/apiContext";
import { ThemeProvider } from "../provider/themeContext";

function App() {
  const value = useContext(ApiContext);
  console.log("value", value);
  return (
    <ApiProvider>
      <Container className="App" fluid>
        <Navbar bg="#f3efd5" expand={false}>
          <Container fluid>
            <Navbar.Brand href="/">{value}</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/index">Index</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/search">Search</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/favorites">Favorites</Link>
                  </Nav.Link>

                  <NavDropdown title="Index" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3">
                      <Link to="/index">Index Component</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </ApiProvider>
  );
}

export default App;
