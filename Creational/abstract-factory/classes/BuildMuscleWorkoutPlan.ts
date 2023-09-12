import WorkoutPlan from "../interfaces/WorkoutPlan";

export default class BuildMuscleWorkoutPlan implements WorkoutPlan {
  generatePlan = () => {
    console.log("Generating build-muscle workout plan.");
  };
}
