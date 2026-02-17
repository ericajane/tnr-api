import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Volunteer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    address: string;    

    @Column('text', { array: true })
    skills: string[];

    @Column()
    hasUpdatedReleaseForm: boolean;

    @Column()
    createdDt: Date;

    @Column()
    updatedDt: Date;
}
