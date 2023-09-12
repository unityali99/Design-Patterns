import BuildMuscleFactory from "./classes/BuildMuscleFactory";
import PlanBuilder from "./classes/PlanBuilder";
import WeightLossFactory from "./classes/WeightLossFactory";

const planBuilder = new PlanBuilder();

planBuilder.getPlan(new BuildMuscleFactory());
planBuilder.getPlan(new WeightLossFactory());
