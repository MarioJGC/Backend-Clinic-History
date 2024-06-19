import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Historia {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdPaciente: number;
    @Column()
    Paciente: string;
    @Column()
    FechaCita: string;
    @Column()
    EstadoCita: string;
    @Column()
    Motivo: string;
}