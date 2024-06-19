import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NotasEvolutivas {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Fecha: string;
    @Column()
    Detalle: string;
    @Column()
    Firma: string;
}