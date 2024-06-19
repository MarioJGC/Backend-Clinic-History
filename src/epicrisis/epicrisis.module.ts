import { Module } from '@nestjs/common';
import { EpicrisisService } from './epicrisis.service';
import { EpicrisisController } from './epicrisis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Epicrisis } from './entities/epicrisis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Epicrisis])],
  controllers: [EpicrisisController],
  providers: [EpicrisisService],
})
export class EpicrisisModule { }