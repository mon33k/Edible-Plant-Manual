import { createContext } from "react";
import { Image } from "react-bootstrap";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const getPlantImgArr = (plant) => {
    const imgList = Array.from(Array(plant["# pics"] + 1).keys()).slice(1);

    const imgPathList = imgList.map((num) => {
      // Some file paths have a space, or begins with a lowercase instead of capitalized
      let filePath = require(`../api/dataset/${plant.Name}/${
        num !== 1 ? plant.Name + num + ".jpg" : plant.Name + ".jpg"
      }`);
      return filePath;
    });

    return imgPathList.map((eachPlant, i) => {
      return (
        <Image
          rounded="true"
          src={eachPlant}
          key={Math.random(i)}
          fluid="true"
        />
      );
    });
  };

  return (
    <ImageContext.Provider value={{ getPlantImgs: getPlantImgArr }}>
      {children}
    </ImageContext.Provider>
  );
};
