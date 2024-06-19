import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Resumen {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Resumen: string;
}