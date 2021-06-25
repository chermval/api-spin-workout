import { IsNotEmpty } from 'class-validator';

export class CreateWorkoutDto {
    @IsNotEmpty()
    distance: string;

    @IsNotEmpty()
    time: string;

    @IsNotEmpty()
    velocity: string;

    @IsNotEmpty()
    pulse: string; 
    
    @IsNotEmpty()
    date: string;
}