import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoriaModule } from './historia/historia.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpicrisisModule } from './epicrisis/epicrisis.module';
import { NotasEvolutivasModule } from './notas-evolutivas/notas-evolutivas.module';
import { InterpretacionModule } from './interpretacion/interpretacion.module';
import { NotaModule } from './nota/nota.module';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } from './config';

@Module({
  imports: [
    HistoriaModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: DB_HOST,
      port: DB_PORT,
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
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