import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlantPage from "./PlantPage";
import { Link } from "react-router-dom";
import { ApiContext } from "../provider/apiContext";

const IndexOfPlants = () => {
  const plantData = useContext(ApiContext);
  console.log("plantdata", plantData);

  // const plantList = props.data.map((plant) => {
  //   return (
  //     <>
  //       <Link
  //         className="nav-link"
  //         to={`/index/${plant.Name}`}
  //         onClick={selectPlant}
  //       >
  //         {plant.Name}
  //       </Link>
  //     </>
  //   );
  // });

  // return plantList;
  return <>index page</>;
};

export default IndexOfPlants;
