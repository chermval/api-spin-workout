import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  distance: string;

  @Column()
  time: string;

  @Column()
  velocity: string;

  @Column()
  pulse: string;

  @Column()
  date: string;
}
