import { Controller, Get } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';

@Controller('workouts')
export class WorkoutsController {

    constructor(private workoutsService: WorkoutsService){}

    //Get all workouts
    @Get()
    findAll(){
        return this.workoutsService.findAll();
    }
}
