import { IsInt, IsPositive, IsString } from "class-validator";

export class CreateNotasEvolutivaDto {
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