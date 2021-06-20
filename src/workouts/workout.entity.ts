import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Workout {
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    distance: String;

    @Column()
    time: String;

    @Column()
    velocity: String;

    @Column()
    pulse: String;
    
    @Column()
    date: String;
}