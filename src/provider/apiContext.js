import { createContext } from "react";

import plantMetadata from "../api/plantmetadata.json";

export const ApiContext = createContext(plantMetadata);

export const ApiProvider = (props) => {
  // props here for the value that will change
  const { plantdata, filteredplantdata } = this.props;

  return (
    <ApiContext.Provider value={plantdata}>
      {props.children}
    </ApiContext.Provider>
  );
};
