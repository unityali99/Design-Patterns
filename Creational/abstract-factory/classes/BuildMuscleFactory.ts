import GoalFactory from "../interfaces/GoalFactory";
import BuildMuscleMealPlan from "./BuildMuscleMealPlan";
import BuildMuscleWorkoutPlan from "./BuildMuscleWorkoutPlan";

export default class BuildMuscleFactory implements GoalFactory {
  createMealPlan = () => {
    return new BuildMuscleWorkoutPlan();
  };

  createWorkoutPlan = () => {
    return new BuildMuscleMealPlan();
  };
}
