import { IsNotEmpty } from 'class-validator'

export class UpdateWorkoutDto {
    @IsNotEmpty()
    distance: String;

    @IsNotEmpty()
    time: String;

    @IsNotEmpty()
    velocity: String;

    @IsNotEmpty()
    pulse: String; 

}