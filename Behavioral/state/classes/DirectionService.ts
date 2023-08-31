import TravelMode from "../interfaces/TravelMode";

export default class DirectionService implements TravelMode {
  private travelMode: TravelMode;

  constructor(travelMode?: TravelMode) {
    this.travelMode = travelMode!;
  }

  get getTravelMode() {
    return this.travelMode;
  }

  set setTravelMode(travelMode: TravelMode) {
    this.travelMode = travelMode;
  }

  getEta = () => this.travelMode.getEta();
  getDirection = () => this.travelMode.getDirection();
}
