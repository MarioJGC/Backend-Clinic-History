import { Module } from '@nestjs/common';
import { HistoriaService } from './historia.service';
import { HistoriaController } from './historia.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Historia } from './entities/historia.entity';
import { Anamnesis } from './entities/anamnesis.entity';
import { Atm } from './entities/atm.entity';
import { Antecedentes } from './entities/antecedentes.entity';
import { DiagnosticoDefinitivo } from './entities/diagnostico-definitivo.entity';
import { DiagnosticoPresuntivo } from './entities/diagnostico-presuntivo.entity';
import { Dolor } from './entities/dolor.entity';
import { ExamenClinico } from './entities/examen-clinico.entity';
import { ExamenAuxiliar } from './entities/examenauxiliar.entity';
import { ExamenClinicoEstomatologico } from './entities/examen-clinico-estomatologico.entity';
import { ExamenIntrabucal } from './entities/examenintrabucal.entity';
import { Resumen } from './entities/resumen.entity';
import { Tratamiento } from './entities/tratamiento.entity';
import { FuncionesBiologicas } from './entities/funcionesbiologicas.entity';
import { Paciente } from './entities/paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente, Historia, Anamnesis, Antecedentes, FuncionesBiologicas, Atm, DiagnosticoDefinitivo, DiagnosticoPresuntivo, Dolor, ExamenClinico, ExamenAuxiliar, ExamenClinicoEstomatologico, ExamenIntrabucal, Resumen, Tratamiento])],
  controllers: [HistoriaController],
  providers: [HistoriaService],
})
export class HistoriaModule { }