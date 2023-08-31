import FactSegment from "./classes/FactSegment";
import FormatSegment from "./classes/FormatSegment";
import NoiseReducer from "./classes/NoiseReducer";
import Normalizer from "./classes/Normalizer";
import ReverbAdder from "./classes/ReverbAdder";
import WaveFile from "./classes/WaveFile";

const waveFile = new WaveFile();

waveFile.addSegment(new FactSegment());
waveFile.addSegment(new FormatSegment());

waveFile.executeOperation(new Normalizer());
console.log("---------------------------");
waveFile.executeOperation(new ReverbAdder());
console.log("---------------------------");
waveFile.executeOperation(new NoiseReducer());
