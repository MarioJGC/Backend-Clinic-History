import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dolor {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Temporal: string;
    @Column()
    Masetero: string;
    @Column()
    PterigoideoInterno: string;
    @Column()
    PterigoideoExterno: string;
    @Column()
    Digastrico: string;
    @Column()
    Esternocleidomastoideo: string;
}