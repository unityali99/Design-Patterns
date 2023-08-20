import TravelMode from "../interfaces/TravelMode";

export default class Drive implements TravelMode {
  getEta = () => {
    console.log("DRIVE");
    return 1;
  };

  getDirection = () => {
    console.log("DRIVE DIRECTION");
    return "HIGHWAY";
  };
}
