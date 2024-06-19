import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Antecedentes {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Personales: string;
    @Column()
    Patologicos: string;
    @Column()
    Alergias: string;
    @Column()
    Familiares: string;
}