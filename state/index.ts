import DirectionService from "./classes/DirectionService";
import Drive from "./classes/Drive";

const directionService = new DirectionService();

directionService.setTravelMode = new Drive();

console.log(directionService.getDirection());

console.log(directionService.getEta());
