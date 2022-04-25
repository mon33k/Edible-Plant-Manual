import { createContext } from "react";
import { Image } from "react-bootstrap";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const imgPathList = (plant) => {
    const imgList = Array.from(Array(plant["# pics"] + 1).keys()).slice(1);

    const imgPathList = imgList.map((num) => {
      // Some file paths have a space, or begins with a lowercase instead of capitalized
      let filePath = `../dataset/${plant.Name}/${
        num !== 1 ? plant.Name + num + ".jpg" : plant.Name + ".jpg"
      }`;
      return filePath;
    });
    console.log("plant paths ==> ", imgPathList);

    return imgPathList;
  };

  return (
    <ImageContext.Provider value={{ getPlantImgs: imgPathList }}>
      {children}
    </ImageContext.Provider>
  );
};
