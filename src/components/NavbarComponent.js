import React from "react";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./Search";
import Index from "./IndexOfPlants";
import Favorites from "./Favorites";
import PlantPage from "./PlantPage";

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

const NavbarComponent = () => {
  return (
    <>
      {" "}
      <Navbar bg="#f3efd5" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/">Edible Plant Manual</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>

                <Link className="nav-link" to="/index">
                  Index
                </Link>

                <Link className="nav-link" to="/favorites">
                  Favorites
                </Link>
              </Nav>
              <Search />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/index/:plantName" element={<PlantPage />} />
      </Routes>
    </>
  );
};

export default NavbarComponent;
