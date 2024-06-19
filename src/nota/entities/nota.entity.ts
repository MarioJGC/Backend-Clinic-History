import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Nota {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    TienePermiso: boolean;
    @Column()
    Nota: string;
}