import MealPlan from "./MealPlan";
import WorkoutPlan from "./WorkoutPlan";

export default interface GoalFactory {
  createWorkoutPlan: () => WorkoutPlan;
  createMealPlan: () => MealPlan;
}
