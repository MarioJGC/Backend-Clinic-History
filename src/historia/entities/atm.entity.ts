import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Atm {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Trayectoria: string;
    @Column()
    RuidosAtm: string;
    @Column()
    Palpacion: string;
    @Column()
    GradoApertura: string;
    @Column()
    Ganglios: string;
}