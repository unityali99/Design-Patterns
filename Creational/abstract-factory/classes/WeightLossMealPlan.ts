import MealPlan from "../interfaces/MealPlan";

export default class WeightLossMealPlan implements MealPlan {
  generatePlan = () => {
    console.log("Generating weight loss meal plan.");
  };
}
