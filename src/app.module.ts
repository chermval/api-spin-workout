import { Module } from '@nestjs/common';
import { WorkoutsModule } from './workouts/workouts.module';
import { HealthcheckController } from './healthcheck/healthcheck.controller';

@Module({
  imports: [WorkoutsModule],
  controllers: [HealthcheckController],
})
export class AppModule {}
