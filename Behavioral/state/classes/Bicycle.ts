import TravelMode from "../interfaces/TravelMode";

export default class Bicycle implements TravelMode {
  getEta = () => {
    console.log("BICYCLE");
    return 3;
  };

  getDirection = () => {
    console.log("BICYCLE DIRECTION");
    return "street";
  };
}
