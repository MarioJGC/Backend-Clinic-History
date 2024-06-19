import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Anamnesis {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Ectoscopia: string;
    @Column()
    Anamensis: string;
    @Column()
    MotivoConsulta: string;
    @Column()
    EnfermedadActual: string;
}