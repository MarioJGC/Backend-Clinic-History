import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Paciente {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    FechaHoraCreacion: string;
    @Column()
    Nombre: string;
    @Column()
    ApellidoPaterno: string;
    @Column()
    ApellidoMaterno: string;
    @Column()
    Sexo: string;
    @Column()
    Lugar: string;
    @Column()
    Domicilio: string;
    @Column()
    FechaNacimiento: Date;
    @Column()
    EstadoCivil: string;
    @Column()
    NumeroCelular: string;
    @Column()
    Correo: string;
    @Column()
    Ocupacion: string;
    @Column()
    Responsable: string;
    @Column()
    DomicilioResponsable: string;
    @Column()
    CelularResponsable: string;
    @Column()
    MotivoConsulta: string;
}