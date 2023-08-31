import Resource from "../interfaces/Resource";

export default class HumanResource implements Resource {
  deploy = () => {
    console.log("Deploying a human resource");
  };
}
