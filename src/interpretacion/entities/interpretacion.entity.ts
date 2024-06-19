import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Interpretacion {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Panoramica: string;
    @Column()
    Hemograma: string;
    @Column()
    TiempoSangria: string;
    @Column()
    TiempoCoagulacion: string;
}