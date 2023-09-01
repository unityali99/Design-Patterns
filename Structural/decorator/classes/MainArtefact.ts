import AbstractArtefact from "../interfaces/AbstractArtefact";

export default class MainArtefact implements AbstractArtefact {
  private artefact: AbstractArtefact;

  constructor(artefact: AbstractArtefact) {
    this.artefact = artefact;
  }

  render = () => {
    const artefactName = this.artefact.render();
    return this.setAsMain(artefactName);
  };

  private setAsMain = (name: string) => {
    return `${name} (Is Main)`;
  };
}
