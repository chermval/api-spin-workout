import { Module } from '@nestjs/common';
import { WorkoutsModule } from './workouts/workouts.module';

@Module({
  imports: [WorkoutsModule],
})
export class AppModule {}
