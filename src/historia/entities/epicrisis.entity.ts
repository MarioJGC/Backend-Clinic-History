import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Epicrisis {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Detalle: string;
}