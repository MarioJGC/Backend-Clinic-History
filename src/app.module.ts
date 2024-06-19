import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoriaModule } from './historia/historia.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpicrisisModule } from './epicrisis/epicrisis.module';
import { NotasEvolutivasModule } from './notas-evolutivas/notas-evolutivas.module';
import { InterpretacionModule } from './interpretacion/interpretacion.module';
import { NotaModule } from './nota/nota.module';

@Module({
  imports: [
    HistoriaModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "root_user",
      password: "root",
      database: "hc_database",
      //entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    EpicrisisModule,
    NotasEvolutivasModule,
    InterpretacionModule,
    NotaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }