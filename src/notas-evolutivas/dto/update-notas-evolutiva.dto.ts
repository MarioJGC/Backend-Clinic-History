import { PartialType } from '@nestjs/mapped-types';

import { IsInt, IsPositive, IsString } from 'class-validator';
import { CreateNotasEvolutivaDto } from './create-notas-evolutiva.dto';

export class UpdateNotasEvolutivaDto extends PartialType(CreateNotasEvolutivaDto) {
    @IsInt()
    @IsPositive()
    Id: number;
    @IsInt()
    @IsPositive()
    IdHistoria: number;
    @IsString()
    Fecha: string;
    @IsString()
    Detalle: string;
    @IsString()
    Firma: string;
}