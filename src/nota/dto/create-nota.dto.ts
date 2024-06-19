import { IsBoolean, IsInt, IsPositive, IsString } from "class-validator";

export class CreateNotaDto {
    @IsInt()
    @IsPositive()
    IdHistoria: number;
    @IsBoolean()
    TienePermiso: boolean;
    @IsString()
    Nota: string;
}