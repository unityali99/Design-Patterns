import AbstractArtefact from "../interfaces/AbstractArtefact";

export default class WarningArtefact implements AbstractArtefact {
  private artefact: AbstractArtefact;

  constructor(artefact: AbstractArtefact) {
    this.artefact = artefact;
  }

  render = () => {
    const artefactName = this.artefact.render();
    return this.setWarning(artefactName);
  };

  private setWarning = (name: string) => {
    return `${name} (Warning)`;
  };
}
