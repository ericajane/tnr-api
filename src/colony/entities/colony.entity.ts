import { Cat } from 'src/cat/entities/cat.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Colony {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    caretaker: Caretaker;

    @Column()
    createdDt: Date;

    @Column()
    updatedDt: Date;

    @Column()
    cats: Cat[];
}

export class Caretaker {
    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;
}
