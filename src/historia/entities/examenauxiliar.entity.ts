import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ExamenAuxiliar {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Detalle: string;
}