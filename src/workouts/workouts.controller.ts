import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Workout } from './workout.entity';
import { WorkoutsService } from './workouts.service';

@Controller('/api/v1/workouts')
export class WorkoutsController {

    constructor(private workoutsService: WorkoutsService){}

    //Get all workouts
    @Get()
    findAll(){
        return this.workoutsService.findAll();
    }

    //Get workout by id
    @Get('/:id')
    findById(@Param('id') id: string ): Promise<Workout> {
        return this.workoutsService.findById(id);
    }

    //Save workout registry
    @Post()
    save(@Body() createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
        return this.workoutsService.save(createWorkoutDto);
    }
    
}
