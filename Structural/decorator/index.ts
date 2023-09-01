import Artefact from "./classes/Artefact";
import ErrorArtifact from "./classes/ErrorArtefact";
import MainArtefact from "./classes/MainArtefact";
import WarningArtefact from "./classes/WarningArtefact";

const artefact = new ErrorArtifact(new MainArtefact(new Artefact("index")));

const artefact2 = new WarningArtefact(new Artefact("utils"));

console.log(artefact.render());

console.log(artefact2.render());
