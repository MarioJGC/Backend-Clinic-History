import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DiagnosticoDefinitivo {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Diagnostico: string;
}