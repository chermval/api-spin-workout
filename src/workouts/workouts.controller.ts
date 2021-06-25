import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Workout } from './workout.entity';
import { WorkoutsService } from './workouts.service';
import { Logger } from '@nestjs/common';

@Controller('/api/v1/workouts')
export class WorkoutsController {
  private logger = new Logger('WorkoutsController');

  constructor(private workoutsService: WorkoutsService) {}

  //Get all workouts
  @Get()
  findAll() {
    this.logger.verbose(`Getting all workout`);
    return this.workoutsService.findAll();
  }

  //Get workout by id
  @Get('/:id')
  findById(@Param('id') id: string): Promise<Workout> {
    this.logger.verbose(`Getting workout with id ${id}`);
    return this.workoutsService.findById(id);
  }

  //Save workout registry
  @Post()
  save(@Body() createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    this.logger.verbose(`Creating workout from date ${createWorkoutDto.date}`);
    return this.workoutsService.save(createWorkoutDto);
  }

  //Delete workout by id
  @Delete('/:id')
  deleteById(@Param('id') id: string): Promise<void> {
    this.logger.verbose(`Deleting workout with id ${id}`);
    return this.workoutsService.deleteById(id);
  }

  //Update workout by id
  @Put('/:id')
  updateById(
    @Param('id') id: string,
    @Body() updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<void> {
    this.logger.verbose(`Updatings workout with id ${id}`);
    return this.workoutsService.updateById(id, updateWorkoutDto);
  }
}
