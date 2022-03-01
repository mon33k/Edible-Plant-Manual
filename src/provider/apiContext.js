import { createContext } from "react";

import plantMetadata from "../api/plantmetadata.json";

const ApiContext = createContext({ plantInfo: plantMetadata });

export function ApiProvider({ children }) {
  console.log("ApiContext", ApiContext);
  return (
    <ApiContext.Provider value={plantMetadata}>{children}</ApiContext.Provider>
  );
}
