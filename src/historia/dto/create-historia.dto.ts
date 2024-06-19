import { IsInt, IsPositive, IsString } from "class-validator";

export class CreateHistoriaDto {
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
}