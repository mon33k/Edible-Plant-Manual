import React, { useContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { ApiContext } from "../provider/apiContext";

const IndexOfPlants = () => {
  const plantData = useContext(ApiContext);

  const plantList = plantData.map((plant) => {
    return (
      <Link
        key={Math.random(plant.Nr)}
        className="nav-link"
        to={`/index/${plant.Name}`}
        state={{ from: plant }}
      >
        {plant.Name}
      </Link>
    );
  });

  return plantList;
};

export default IndexOfPlants;
