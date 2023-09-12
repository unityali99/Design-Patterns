import MealPlan from "../interfaces/MealPlan";

export default class BuildMuscleMealPlan implements MealPlan {
  generatePlan = () => {
    console.log("Generating build-muscle meal plan.");
  };
}
