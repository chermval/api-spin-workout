import { EntityRepository, Repository } from 'typeorm';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Workout } from './workout.entity';

@EntityRepository(Workout)
export class WorkoutsRepository extends Repository<Workout> {
  async saveRecord(workoutDto: CreateWorkoutDto): Promise<Workout> {
    const { distance, time, velocity, pulse, date } = workoutDto;
    const workout = this.create({
      distance,
      time,
      velocity,
      pulse,
      date,
    });

    await this.save(workout);

    return workout;
  }

  async updateRecord(
    id: string,
    updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<number> {
    const { distance, time, velocity, pulse } = updateWorkoutDto;
    const workout = this.create({
      distance,
      time,
      velocity,
      pulse,
    });

    const result = await this.update(id, workout);

    return result.affected;
  }
}
