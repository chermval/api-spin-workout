import { Injectable } from '@nestjs/common';
import { Workout } from './workout.model';

@Injectable()
export class WorkoutsService {
    private workouts: Workout[] = [];

    findAll(): Workout[]{
        return this.workouts;
    }
}
