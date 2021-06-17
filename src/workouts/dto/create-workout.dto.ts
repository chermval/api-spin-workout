import { IsNotEmpty } from 'class-validator'

export class CreateWorkoutDto {
    @IsNotEmpty()
    distance: String;

    @IsNotEmpty()
    time: String;

    @IsNotEmpty()
    velocity: String;

    @IsNotEmpty()
    pulse: String; 
    
    @IsNotEmpty()
    date: String;
}