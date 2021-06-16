import { EntityRepository, Repository } from "typeorm";
import { Workout } from "./workout.entity";

@EntityRepository(Workout)
export class WorkoutsRepository extends Repository<Workout>{

}