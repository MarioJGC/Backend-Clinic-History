import { Historia } from "src/historia/entities/historia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Epicrisis {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Detalle: string;
}