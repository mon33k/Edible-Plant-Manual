import { createContext } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  return (
    <ImageContext.Provider value={"image path array here"}>
      {children}
    </ImageContext.Provider>
  );
};
