import { IsInt, IsPositive, IsString, isString } from "class-validator";

export class CreateEpicrisisDto {
    @IsInt()
    @IsPositive()
    IdHistoria: number;
    @IsString()
    Detalle: string;
}