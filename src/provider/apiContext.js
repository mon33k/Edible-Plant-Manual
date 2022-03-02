import { createContext } from "react";

import plantMetadata from "../api/plantmetadata.json";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider value={plantMetadata}>{children}</ApiContext.Provider>
  );
};
