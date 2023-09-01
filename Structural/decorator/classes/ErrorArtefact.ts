import AbstractArtefact from "../interfaces/AbstractArtefact";

export default class ErrorArtifact implements AbstractArtefact {
  private artefact: AbstractArtefact;

  constructor(artefact: AbstractArtefact) {
    this.artefact = artefact;
  }

  render = () => {
    const artefactName = this.artefact.render();
    return this.setError(artefactName);
  };

  private setError = (name: string) => {
    return `${name} (Has Error)`;
  };
}
