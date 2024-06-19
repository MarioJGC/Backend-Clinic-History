import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ExamenClinicoEstomatologico {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Facie: string;
    @Column()
    IdCraneo: number;
    @Column()
    IdCara: number;
    @Column()
    IdSimetria: number;
}