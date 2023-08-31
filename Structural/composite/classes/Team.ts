import Resource from "../interfaces/Resource";

export default class Team implements Resource {
  private resources: Resource[] = [];

  addResource = (resource: Resource) => {
    this.resources.push(resource);
  };

  deploy = () => {
    for (const resource of this.resources) {
      resource.deploy();
    }
  };
}
