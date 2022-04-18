import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useLocation, matchPath, Route, Navigate } from "react-router-dom";
import PlantPage from "./PlantPage";

const Search = () => {
  const { pathname } = useLocation();
  const isAdminPath = matchPath("/admin/*", pathname);

  console.log("pathname ", pathname);
  let value = "";

  function handleClick(e) {
    if (value) {
      return (
        <PlantPage />
        // <Route
        //   path="/"
        //   element={() => {
        //     <Navigate replace to="/index/Alfalfa" />;
        //   }}
        // />
      );

      console.log("value", value);
      // console.log("e", e);
    }
  }

  function handleChange(e) {
    value = e.target.value;
    console.log("onchange ", e.target.value);
  }

  return (
    <>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleChange}
          onKeyDown={handleClick}
        />
        <Button onClick={handleClick} variant="outline-success">
          Search
        </Button>
      </Form>
    </>
  );
};

export default Search;
