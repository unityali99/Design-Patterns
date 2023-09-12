import WorkoutPlan from "../interfaces/WorkoutPlan";

export default class WeightLossWorkoutPlan implements WorkoutPlan {
  generatePlan = () => {
    console.log("Generating weight loss workout plan.");
  };
}
