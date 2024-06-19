import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaDto } from './create-nota.dto';
import { IsBoolean, IsInt, IsPositive, IsString } from 'class-validator';

export class UpdateNotaDto extends PartialType(CreateNotaDto) {
    @IsInt()
    @IsPositive()
    Id: number;
    @IsInt()
    @IsPositive()
    IdHistoria: number;
    @IsBoolean()
    TienePermiso: boolean;
    @IsString()
    Nota: string;
}