import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DiagnosticoPresuntivo {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Diagnostico: string;
}