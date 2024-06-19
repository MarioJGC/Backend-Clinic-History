import { PartialType } from '@nestjs/mapped-types';
import { CreateEpicrisisDto } from './create-epicrisis.dto';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class UpdateEpicrisisDto extends PartialType(CreateEpicrisisDto) {
    @IsInt()
    @IsPositive()
    Id: number;
    @IsInt()
    @IsPositive()
    IdHistoria: number;
    @IsString()
    Detalle: string;
}