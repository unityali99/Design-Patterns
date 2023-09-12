import GoalFactory from "../interfaces/GoalFactory";
import WeightLossMealPlan from "./WeightLossMealPlan";
import WeightLossWorkoutPlan from "./WeightLossWorkoutPlan";

export default class WeightLossFactory implements GoalFactory {
  createMealPlan = () => {
    return new WeightLossMealPlan();
  };

  createWorkoutPlan = () => {
    return new WeightLossWorkoutPlan();
  };
}
