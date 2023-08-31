import Resource from "../interfaces/Resource";

export default class Truck implements Resource {
  deploy = () => {
    console.log("Deploying truck");
  };
}
