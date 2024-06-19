import { PartialType } from '@nestjs/mapped-types';
import { CreateInterpretacionDto } from './create-interpretacion.dto';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class UpdateInterpretacionDto extends PartialType(CreateInterpretacionDto) {
    @IsInt()
    @IsPositive()
    Id: number;
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