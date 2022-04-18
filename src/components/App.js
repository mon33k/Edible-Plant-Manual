import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import "../stylesheets/App.css";

import NavbarComponent from "./NavbarComponent";

import { ApiProvider, ApiContext } from "../provider/apiContext";
import { ImageContext, ImageProvider } from "../provider/imageContext";
import { ThemeProvider } from "../provider/themeContext";

function App() {
  // const plantList = useContext(ApiContext);

  function selectPlant(plant) {
    //logic to get function in context that updates or changes plant list
  }

  return (
    <ApiProvider>
      <ImageProvider>
        <Container className="App" fluid>
          <NavbarComponent />
        </Container>
      </ImageProvider>
    </ApiProvider>
  );
}

export default App;
