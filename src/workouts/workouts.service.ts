import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
