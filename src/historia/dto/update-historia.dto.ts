import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoriaDto } from './create-historia.dto';
import { IsInt, IsPositive, IsString } from "class-validator";

export class UpdateHistoriaDto extends PartialType(CreateHistoriaDto) {
    @IsInt()
    @IsPositive()
    Id: number;

    @IsInt()
    @IsPositive()
    IdHistoria: number;
    @IsString()
    MotivoConsulta: string;
    @IsString()
    EnfermedadActual: string;
    @IsString()
    Ectoscopia: string;
    @IsString()
    Anamensis: string;

    @IsString()
    Apetito: string;
    @IsString()
    Deposiciones: string;
    @IsString()
    Sed: string;
    @IsString()
    Orina: string;
    @IsString()
    Suenio: string;

    @IsString()
    Personales: string;
    @IsString()
    Patologicos: string;
    @IsString()
    Alergias: string;
    @IsString()
    Familiares: string;

    @IsString()
    Trayectoria: string;
    @IsString()
    RuidosAtm: string;
    @IsString()
    Palpacion: string;
    @IsString()
    GradoApertura: string;
    @IsString()
    Ganglios: string;

    @IsString()
    Peso: string;
    @IsString()
    Talla: string;
    @IsString()
    Biotipo: string;
    @IsString()
    Piel: string;
    @IsString()
    AnexoCabello: string;
    @IsString()
    AnexoUnias: string;
    @IsString()
    PresionArterial: string;
    @IsString()
    FrecuenciaRespiratoria: string;
    @IsString()
    Pulso: string;
    @IsString()
    Temperatura: string;

    @IsString()
    Facie: string;
    @IsInt()
    @IsPositive()
    IdCraneo: number;
    @IsInt()
    @IsPositive()
    IdCara: number;
    @IsInt()
    @IsPositive()
    IdSimetria: number;

    @IsString()
    Temporal: string;
    @IsString()
    Masetero: string;
    @IsString()
    PterigoideoInterno: string;
    @IsString()
    PterigoideoExterno: string;
    @IsString()
    Digastrico: string;
    @IsString()
    Esternocleidomastoideo: string;

    @IsString()
    LabiosComisuralabial: string;
    @IsString()
    PaladarDuro: string;
    @IsString()
    Cigarrillos: string;
    @IsString()
    PisoBoca: string;
    @IsString()
    Lengua: string;
    @IsString()
    Orofaringe: string;
    @IsString()
    Frenillos: string;
    @IsString()
    Saliva: string;

    @IsString()
    ResumenAnamnesis: string;
    @IsString()
    DiagnosticoIngreso: string;
    @IsString()
    DiagnosticoSalida: string;
    @IsString()
    DetalleExamenAuxiliar: string;

    @IsInt()
    @IsPositive()
    IdAnamnesis: number;
    @IsInt()
    @IsPositive()
    IdAntecedentes: number;
    @IsInt()
    @IsPositive()
    IdAtm: number;
    @IsInt()
    @IsPositive()
    IdDiagnosticoDefinitivo: number;
    @IsInt()
    @IsPositive()
    IdDiagnosticoPresuntivo: number;
    @IsInt()
    @IsPositive()
    IdDolor: number;
    @IsInt()
    @IsPositive()
    IdExamenAuxiliar: number;
    @IsInt()
    @IsPositive()
    IdExamenClinico: number;
    @IsInt()
    @IsPositive()
    IdExamenClinicoEstomatologico: number;
    @IsInt()
    @IsPositive()
    IdExamenIntrabucal: number;
    @IsInt()
    @IsPositive()
    IdFuncionesBiologicas: number;
    @IsInt()
    @IsPositive()
    IdResumen: number;

    @IsInt()
    @IsPositive()
    IdPaciente: number;
    @IsString()
    FechaHoraCreacion: string;
    @IsString()
    Nombre: string;
    @IsString()
    ApellidoPaterno: string;
    @IsString()
    ApellidoMaterno: string;
    @IsString()
    Sexo: string;
    @IsString()
    Lugar: string;
    @IsString()
    Domicilio: string;
    @IsString()
    FechaNacimiento: Date;
    @IsString()
    EstadoCivil: string;
    @IsString()
    NumeroCelular: string;
    @IsString()
    Correo: string;
    @IsString()
    Ocupacion: string;
    @IsString()
    Responsable: string;
    @IsString()
    DomicilioResponsable: string;
    @IsString()
    CelularResponsable: string;
}