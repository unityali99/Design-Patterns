import GoalFactory from "../interfaces/GoalFactory";

export default class PlanBuilder {
  getPlan = (factory: GoalFactory) => {
    factory.createWorkoutPlan().generatePlan();
    factory.createMealPlan().generatePlan();
  };
}
