import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ExamenClinico {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    IdHistoria: number;
    @Column()
    Peso: string;
    @Column()
    Talla: string;
    @Column()
    Biotipo: string;
    @Column()
    Piel: string;
    @Column()
    AnexoCabello: string;
    @Column()
    AnexoUnias: string;
    @Column()
    PresionArterial: string;
    @Column()
    FrecuenciaRespiratoria: string;
    @Column()
    Pulso: string;
    @Column()
    Temperatura: string;
}