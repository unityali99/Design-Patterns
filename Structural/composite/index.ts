import HumanResource from "./classes/HumanResource";
import Team from "./classes/Team";
import Truck from "./classes/Truck";

const team1 = new Team();

team1.addResource(new HumanResource());
team1.addResource(new Truck());

const team2 = new Team();

team2.addResource(new HumanResource());
team2.addResource(new Truck());

const team3 = new Team();

team3.addResource(team1);
team3.addResource(team2);

team3.deploy();
