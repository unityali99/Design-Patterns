import TravelMode from "../interfaces/TravelMode";

export default class Walk implements TravelMode {
  getEta = () => {
    console.log("WALK");
    return 4;
  };

  getDirection = () => {
    console.log("WALK DIRECTION");
    return "SIDE WALK";
  };
}
