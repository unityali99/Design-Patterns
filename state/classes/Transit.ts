import TravelMode from "../interfaces/TravelMode";

export default class Transit implements TravelMode {
  getEta = () => {
    console.log("TRANSIT");
    return 2;
  };

  getDirection = () => {
    console.log("TRANSIT DIRECTION");
    return "BUS STOPS";
  };
}
