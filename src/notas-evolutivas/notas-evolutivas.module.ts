import { Module } from '@nestjs/common';
import { NotasEvolutivasService } from './notas-evolutivas.service';
import { NotasEvolutivasController } from './notas-evolutivas.controller';
import { NotasEvolutivas } from './entities/notas-evolutiva.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NotasEvolutivas])],
  controllers: [NotasEvolutivasController],
  providers: [NotasEvolutivasService],
})
export class NotasEvolutivasModule { }