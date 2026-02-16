import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    breed: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    color: string;

    @Column()
    colonyId: number;

    @Column()
    isNeutered: boolean;

    @Column()
    rabiesVac: boolean;

    @Column()
    isMicrochipped: boolean;

    @Column()
    microchipInfo: MicrochipInfo | null;

    @Column()
    otherDisposition: string;   
}

export class MicrochipInfo {
    @Column()
    microchipNumber: string;

    @Column()
    microchipCompany: string;
}

export class Status {
    @Column()
    status: string;
    @Column()
    rescueOrganization?: RescueOrganization | null;
}   

export class RescueOrganization {
    @Column()
    rescueName: string;

    @Column()
    contactInfo: ContactInfo;
}

export class ContactInfo {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;
}   