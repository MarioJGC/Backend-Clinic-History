import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FuncionesBiologicas {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Apetito: string;
    @Column()
    Deposiciones: string;
    @Column()
    Sed: string;
    @Column()
    Orina: string;
    @Column()
    Suenio: string;

}