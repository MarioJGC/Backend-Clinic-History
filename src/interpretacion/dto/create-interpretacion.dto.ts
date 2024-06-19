import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateInterpretacionDto {

    @IsInt()
    @IsPositive()
    IdHistoria: number;
    @IsString()
    Panoramica: string;
    @IsString()
    Hemograma: string;
    @IsString()
    TiempoSangria: string;
    @IsString()
    TiempoCoagulacion: string;
}