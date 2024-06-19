import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ExamenIntrabucal {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    LabiosComisuralabial: string;
    @Column()
    PaladarDuro: string;
    @Column()
    Cigarrillos: string;
    @Column()
    PisoBoca: string;
    @Column()
    Lengua: string;
    @Column()
    Orofaringe: string;
    @Column()
    Frenillos: string;
    @Column()
    Saliva: string;
}