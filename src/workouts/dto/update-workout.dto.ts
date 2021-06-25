import { IsNotEmpty } from 'class-validator';

export class UpdateWorkoutDto {
  @IsNotEmpty()
  distance: string;

  @IsNotEmpty()
  time: string;

  @IsNotEmpty()
  velocity: string;

  @IsNotEmpty()
  pulse: string;
}
