import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Workout } from './workout.entity';
import { WorkoutsRepository } from './workouts.repository';

@Injectable()
export class WorkoutsService {
    constructor( 
        @InjectRepository(WorkoutsRepository)
        private workoutsRepository: WorkoutsRepository ){}

    async findAll(): Promise<Workout[]>{
        const workouts = await this.workoutsRepository.find({
            order: { id: "DESC"}
        });

        return workouts;
    }

    async findById(id: string): Promise<Workout> {
        const workout = await this.workoutsRepository.findOne(id);

        if (!workout){
            throw new NotFoundException(`Workout with ID "${id}" not found`);
        }

        return workout;
    }

    save(workoutDto: CreateWorkoutDto): Promise<Workout> {
        return this.workoutsRepository.saveRecord(workoutDto);
    }

    async deleteById(id: string): Promise<void> {
        const result = await this.workoutsRepository.delete(id);

        if (result.affected === 0){ 
            throw new NotFoundException(`Workout with ID "${id}" not found`);
        }

    }
}
