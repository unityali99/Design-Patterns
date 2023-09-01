import AbstractArtefact from "../interfaces/AbstractArtefact";

export default class Artefact implements AbstractArtefact {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  render = () => {
    return this.name;
  };
}
