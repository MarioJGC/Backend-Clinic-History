import { Module } from '@nestjs/common';
import { InterpretacionService } from './interpretacion.service';
import { InterpretacionController } from './interpretacion.controller';
import { Interpretacion } from './entities/interpretacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Interpretacion])],
  controllers: [InterpretacionController],
  providers: [InterpretacionService],
})
export class InterpretacionModule { }