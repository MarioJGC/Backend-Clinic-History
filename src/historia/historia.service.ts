import { Injectable } from '@nestjs/common';
import { CreateHistoriaDto } from './dto/create-historia.dto';
import { UpdateHistoriaDto } from './dto/update-historia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Historia } from './entities/historia.entity';
import { Anamnesis } from './entities/anamnesis.entity';
import { Antecedentes } from './entities/antecedentes.entity';
import { Atm } from './entities/atm.entity';
import { DiagnosticoDefinitivo } from './entities/diagnostico-definitivo.entity';
import { DiagnosticoPresuntivo } from './entities/diagnostico-presuntivo.entity';
import { Dolor } from './entities/dolor.entity';
import { ExamenAuxiliar } from './entities/examenauxiliar.entity';
import { ExamenClinico } from './entities/examen-clinico.entity';
import { ExamenClinicoEstomatologico } from './entities/examen-clinico-estomatologico.entity';
import { ExamenIntrabucal } from './entities/examenintrabucal.entity';
import { FuncionesBiologicas } from './entities/funcionesbiologicas.entity';
import { Resumen } from './entities/resumen.entity';
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class HistoriaService {

  constructor(
    @InjectRepository(Historia)
    private readonly historiaRepository: Repository<Historia>,
    @InjectRepository(Anamnesis)
    private readonly anamnesisRepository: Repository<Anamnesis>,
    @InjectRepository(Antecedentes)
    private readonly antecedentesRepository: Repository<Antecedentes>,
    @InjectRepository(Atm)
    private readonly atmRepository: Repository<Atm>,
    @InjectRepository(DiagnosticoDefinitivo)
    private readonly diagnosticoDefinitivoRepository: Repository<DiagnosticoDefinitivo>,
    @InjectRepository(DiagnosticoPresuntivo)
    private readonly diagnosticoPresuntivoRepository: Repository<DiagnosticoPresuntivo>,
    @InjectRepository(Dolor)
    private readonly dolorRepository: Repository<Dolor>,
    @InjectRepository(ExamenAuxiliar)
    private readonly examenAuxiliarRepository: Repository<ExamenAuxiliar>,
    @InjectRepository(ExamenClinico)
    private readonly examenClinicoRepository: Repository<ExamenClinico>,
    @InjectRepository(ExamenClinicoEstomatologico)
    private readonly examenClinicoEstomatologicoRepository: Repository<ExamenClinicoEstomatologico>,
    @InjectRepository(ExamenIntrabucal)
    private readonly examenIntrabucalRepository: Repository<ExamenIntrabucal>,
    @InjectRepository(FuncionesBiologicas)
    private readonly funcionesBiologicasRepository: Repository<FuncionesBiologicas>,
    @InjectRepository(Resumen)
    private readonly resumenRepository: Repository<Resumen>,
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) { }

  async create(createHistoriaDto: CreateHistoriaDto) {
    //const notas = this.historiaRepository.create(createHistoriaDto);
    const anamnesis = new Anamnesis;
    anamnesis.IdHistoria = createHistoriaDto.IdHistoria;
    anamnesis.Ectoscopia = createHistoriaDto.Ectoscopia;
    anamnesis.MotivoConsulta = createHistoriaDto.MotivoConsulta;
    anamnesis.EnfermedadActual = createHistoriaDto.EnfermedadActual;
    anamnesis.Anamensis = createHistoriaDto.Anamensis;
    const newAnamnesis = this.anamnesisRepository.create(anamnesis);
    await this.anamnesisRepository.save(newAnamnesis);

    const antecedentes = new Antecedentes;
    antecedentes.IdHistoria = createHistoriaDto.IdHistoria;
    antecedentes.Personales = createHistoriaDto.Personales;
    antecedentes.Alergias = createHistoriaDto.Alergias;
    antecedentes.Familiares = createHistoriaDto.Familiares;
    antecedentes.Patologicos = createHistoriaDto.Patologicos;
    const newAntecedentes = this.antecedentesRepository.create(antecedentes);
    await this.antecedentesRepository.save(newAntecedentes);

    const atm = new Atm;
    atm.IdHistoria = createHistoriaDto.IdHistoria;
    atm.Trayectoria = createHistoriaDto.Trayectoria;
    atm.RuidosAtm = createHistoriaDto.RuidosAtm;
    atm.Palpacion = createHistoriaDto.Palpacion;
    atm.GradoApertura = createHistoriaDto.GradoApertura;
    atm.Ganglios = createHistoriaDto.Ganglios;
    const newAtm = this.atmRepository.create(atm);
    await this.atmRepository.save(newAtm);

    const diagnosticoDefinitivo = new DiagnosticoDefinitivo;
    diagnosticoDefinitivo.IdHistoria = createHistoriaDto.IdHistoria;
    diagnosticoDefinitivo.Diagnostico = createHistoriaDto.DiagnosticoIngreso;
    const newDiagDefinitovo = this.diagnosticoDefinitivoRepository.create(diagnosticoDefinitivo);
    await this.diagnosticoDefinitivoRepository.save(newDiagDefinitovo);

    const diagnosticoPresuntivo = new DiagnosticoPresuntivo;
    diagnosticoPresuntivo.IdHistoria = createHistoriaDto.IdHistoria;
    diagnosticoPresuntivo.Diagnostico = createHistoriaDto.DiagnosticoIngreso;
    const newDiagPresuntivo = this.diagnosticoPresuntivoRepository.create(diagnosticoPresuntivo);
    await this.diagnosticoPresuntivoRepository.save(newDiagPresuntivo);

    const dolor = new Dolor;
    dolor.IdHistoria = createHistoriaDto.IdHistoria;
    dolor.Temporal = createHistoriaDto.Temporal;
    dolor.Masetero = createHistoriaDto.Masetero;
    dolor.PterigoideoExterno = createHistoriaDto.PterigoideoExterno;
    dolor.PterigoideoInterno = createHistoriaDto.PterigoideoInterno;
    dolor.Esternocleidomastoideo = createHistoriaDto.Esternocleidomastoideo;
    dolor.Digastrico = createHistoriaDto.Digastrico;
    const newDolor = this.dolorRepository.create(dolor);
    await this.dolorRepository.save(newDolor);

    const examenAuxiliar = new ExamenAuxiliar;
    examenAuxiliar.IdHistoria = createHistoriaDto.IdHistoria;
    examenAuxiliar.Detalle = createHistoriaDto.DetalleExamenAuxiliar;
    const newExame = this.examenAuxiliarRepository.create(examenAuxiliar);
    await this.examenAuxiliarRepository.save(newExame);

    const examenClinico = new ExamenClinico;
    examenClinico.IdHistoria = createHistoriaDto.IdHistoria;
    examenClinico.Peso = createHistoriaDto.Peso;
    examenClinico.Talla = createHistoriaDto.Talla;
    examenClinico.Biotipo = createHistoriaDto.Biotipo;
    examenClinico.Piel = createHistoriaDto.Piel;
    examenClinico.AnexoCabello = createHistoriaDto.AnexoCabello;
    examenClinico.AnexoUnias = createHistoriaDto.AnexoUnias;
    examenClinico.PresionArterial = createHistoriaDto.PresionArterial;
    examenClinico.FrecuenciaRespiratoria = createHistoriaDto.FrecuenciaRespiratoria;
    examenClinico.Pulso = createHistoriaDto.Pulso;
    examenClinico.Temperatura = createHistoriaDto.Temperatura;
    const newExamenClinico = this.examenClinicoRepository.create(examenClinico);
    await this.examenClinicoRepository.save(newExamenClinico);


    const examenClinicoEstomatologico = new ExamenClinicoEstomatologico;
    examenClinicoEstomatologico.IdHistoria = createHistoriaDto.IdHistoria;
    examenClinicoEstomatologico.Facie = createHistoriaDto.Facie;
    examenClinicoEstomatologico.IdCraneo = createHistoriaDto.IdCraneo;
    examenClinicoEstomatologico.IdCara = createHistoriaDto.IdCara;
    examenClinicoEstomatologico.IdSimetria = createHistoriaDto.IdSimetria;
    const newExamenClinicoEstoma = this.examenClinicoEstomatologicoRepository.create(examenClinicoEstomatologico);
    await this.examenClinicoEstomatologicoRepository.save(newExamenClinicoEstoma);

    const intrabucal = new ExamenIntrabucal;
    intrabucal.IdHistoria = createHistoriaDto.IdHistoria;
    intrabucal.LabiosComisuralabial = createHistoriaDto.LabiosComisuralabial;
    intrabucal.PaladarDuro = createHistoriaDto.PaladarDuro;
    intrabucal.Cigarrillos = createHistoriaDto.Cigarrillos;
    intrabucal.PisoBoca = createHistoriaDto.PisoBoca;
    intrabucal.Lengua = createHistoriaDto.Lengua;
    intrabucal.Orofaringe = createHistoriaDto.Orofaringe;
    intrabucal.Frenillos = createHistoriaDto.Frenillos;
    intrabucal.Saliva = createHistoriaDto.Saliva;
    const newExamenIntrabucal = this.examenIntrabucalRepository.create(intrabucal);
    await this.examenIntrabucalRepository.save(newExamenIntrabucal);

    const biologicas = new FuncionesBiologicas;
    biologicas.IdHistoria = createHistoriaDto.IdHistoria;
    biologicas.Apetito = createHistoriaDto.Apetito;
    biologicas.Deposiciones = createHistoriaDto.Deposiciones;
    biologicas.Sed = createHistoriaDto.Sed;
    biologicas.Orina = createHistoriaDto.Orina;
    biologicas.Suenio = createHistoriaDto.Suenio;
    const funciones = this.funcionesBiologicasRepository.create(biologicas);
    await this.funcionesBiologicasRepository.save(funciones);

    const resumenAnama = new Resumen;
    resumenAnama.IdHistoria = createHistoriaDto.IdHistoria;
    resumenAnama.Resumen = createHistoriaDto.ResumenAnamnesis;
    const resumen = this.resumenRepository.create(resumenAnama);
    await this.resumenRepository.save(resumen);

  }


  async findAll() {
    let pacientes = await this.historiaRepository.find();
    for (let element of pacientes) {
      let Id = element.IdPaciente;
      const paciente = await this.pacienteRepository.findOneBy({ Id })
      if (paciente) {
        element.Paciente = paciente.ApellidoPaterno + ' ' + paciente.ApellidoMaterno + ' ' + paciente.Nombre;
      }
    }
    return pacientes;
  }

  async findOne(IdHistoria: number) {
    let Id = IdHistoria;
    const historia = new UpdateHistoriaDto;
    const dataHistoria = await this.historiaRepository.findOneBy({ Id });
    let IdPaciente = dataHistoria.IdPaciente
    if (IdPaciente > 0) {
      let Id = IdPaciente;
      const dataPaciente = await this.pacienteRepository.findOneBy({ Id });
      if (dataPaciente != null) {
        historia.IdPaciente = dataPaciente.Id;
        historia.FechaHoraCreacion = dataPaciente.FechaHoraCreacion;
        historia.Nombre = dataPaciente.Nombre;
        historia.ApellidoPaterno = dataPaciente.ApellidoPaterno;
        historia.ApellidoMaterno = dataPaciente.ApellidoMaterno;
        historia.Sexo = dataPaciente.Sexo;
        historia.Lugar = dataPaciente.Lugar;
        historia.Domicilio = dataPaciente.Domicilio;
        historia.FechaNacimiento = dataPaciente.FechaNacimiento;
        historia.EstadoCivil = dataPaciente.EstadoCivil;
        historia.NumeroCelular = dataPaciente.NumeroCelular;
        historia.Correo = dataPaciente.Correo;
        historia.Ocupacion = dataPaciente.Ocupacion;
        historia.Responsable = dataPaciente.Responsable;
        historia.DomicilioResponsable = dataPaciente.DomicilioResponsable;
        historia.CelularResponsable = dataPaciente.CelularResponsable;
      }

    }

    const dataAnamnesis = await this.anamnesisRepository.findOneBy({ IdHistoria });
    if (dataAnamnesis != null) {
      historia.IdAnamnesis = dataAnamnesis.Id;
      historia.Ectoscopia = dataAnamnesis.Ectoscopia;
      historia.MotivoConsulta = dataAnamnesis.MotivoConsulta;
      historia.EnfermedadActual = dataAnamnesis.EnfermedadActual;
      historia.Anamensis = dataAnamnesis.Anamensis;
    }
    const dataAntecedentes = await this.antecedentesRepository.findOneBy({ IdHistoria });
    if (dataAntecedentes != null) {
      historia.IdAntecedentes = dataAntecedentes.Id;
      historia.Personales = dataAntecedentes.Personales;
      historia.Alergias = dataAntecedentes.Alergias;
      historia.Familiares = dataAntecedentes.Familiares;
      historia.Patologicos = dataAntecedentes.Patologicos;
    }

    const dataAtm = await this.atmRepository.findOneBy({ IdHistoria });
    if (dataAtm != null) {
      historia.IdAtm = dataAtm.Id;
      historia.Trayectoria = dataAtm.Trayectoria;
      historia.RuidosAtm = dataAtm.RuidosAtm;
      historia.Palpacion = dataAtm.Palpacion;
      historia.GradoApertura = dataAtm.GradoApertura;
      historia.Ganglios = dataAtm.Ganglios;
    }

    const dataDiagDefinitivo = await this.diagnosticoDefinitivoRepository.findOneBy({ IdHistoria });
    if (dataDiagDefinitivo != null) {
      historia.IdDiagnosticoDefinitivo = dataDiagDefinitivo.Id;
      historia.DiagnosticoSalida = dataDiagDefinitivo.Diagnostico;
    }

    const dataDiagPresuntivo = await this.diagnosticoPresuntivoRepository.findOneBy({ IdHistoria });
    if (dataDiagPresuntivo != null) {
      historia.IdDiagnosticoPresuntivo = dataDiagPresuntivo.Id;
      historia.DiagnosticoIngreso = dataDiagPresuntivo.Diagnostico;
    }

    const dolor = await this.dolorRepository.findOneBy({ IdHistoria });
    if (dolor != null) {
      historia.IdDolor = dolor.Id;
      historia.Temporal = dolor.Temporal;
      historia.Masetero = dolor.Masetero;
      historia.PterigoideoExterno = dolor.PterigoideoExterno;
      historia.PterigoideoInterno = dolor.PterigoideoInterno;
      historia.Esternocleidomastoideo = dolor.Esternocleidomastoideo;
      historia.Digastrico = dolor.Digastrico;
    }

    const examenAuxiliar = await this.examenAuxiliarRepository.findOneBy({ IdHistoria });
    if (examenAuxiliar != null) {
      historia.IdExamenAuxiliar = examenAuxiliar.Id;
      historia.DetalleExamenAuxiliar = examenAuxiliar.Detalle;
    }

    const examenClinico = await this.examenClinicoRepository.findOneBy({ IdHistoria });
    if (examenClinico != null) {
      historia.IdExamenClinico = examenClinico.Id;
      historia.Peso = examenClinico.Peso;
      historia.Talla = examenClinico.Talla;
      historia.Biotipo = examenClinico.Biotipo;
      historia.Piel = examenClinico.Piel;
      historia.AnexoCabello = examenClinico.AnexoCabello;
      historia.AnexoUnias = examenClinico.AnexoUnias;
      historia.PresionArterial = examenClinico.PresionArterial;
      historia.FrecuenciaRespiratoria = examenClinico.FrecuenciaRespiratoria;
      historia.Pulso = examenClinico.Pulso;
      historia.Temperatura = examenClinico.Temperatura;
    }

    const examenClinicoEstomatologico = await this.examenClinicoEstomatologicoRepository.findOneBy({ IdHistoria });
    if (examenClinicoEstomatologico != null) {
      historia.IdExamenClinicoEstomatologico = examenClinicoEstomatologico.Id;
      historia.Facie = examenClinicoEstomatologico.Facie;
      historia.IdCraneo = examenClinicoEstomatologico.IdCraneo;
      historia.IdCara = examenClinicoEstomatologico.IdCara;
      historia.IdSimetria = examenClinicoEstomatologico.IdSimetria;
    }

    const intrabucal = await this.examenIntrabucalRepository.findOneBy({ IdHistoria });
    if (intrabucal != null) {
      historia.IdExamenIntrabucal = intrabucal.Id;
      historia.LabiosComisuralabial = intrabucal.LabiosComisuralabial;
      historia.PaladarDuro = intrabucal.PaladarDuro;
      historia.Cigarrillos = intrabucal.Cigarrillos;
      historia.PisoBoca = intrabucal.PisoBoca;
      historia.Lengua = intrabucal.Lengua;
      historia.Orofaringe = intrabucal.Orofaringe;
      historia.Frenillos = intrabucal.Frenillos;
      historia.Saliva = intrabucal.Saliva;
    }

    const biologicas = await this.funcionesBiologicasRepository.findOneBy({ IdHistoria });
    if (biologicas != null) {
      historia.IdFuncionesBiologicas = biologicas.Id;
      historia.Apetito = biologicas.Apetito;
      historia.Deposiciones = biologicas.Deposiciones;
      historia.Sed = biologicas.Sed;
      historia.Orina = biologicas.Orina;
      historia.Suenio = biologicas.Suenio;
    }

    const resumen = await this.resumenRepository.findOneBy({ IdHistoria });
    if (resumen != null) {
      historia.IdResumen = resumen.Id;
      historia.IdHistoria = resumen.IdHistoria;
      historia.ResumenAnamnesis = resumen.Resumen;
    }
    return await historia;
  }

  async update(id: number, updateHistoriaDto: UpdateHistoriaDto) {

    const anamnesis = new Anamnesis;
    anamnesis.Id = updateHistoriaDto.IdAnamnesis;
    anamnesis.IdHistoria = updateHistoriaDto.IdHistoria;
    anamnesis.Ectoscopia = updateHistoriaDto.Ectoscopia;
    anamnesis.MotivoConsulta = updateHistoriaDto.MotivoConsulta;
    anamnesis.EnfermedadActual = updateHistoriaDto.EnfermedadActual;
    anamnesis.Anamensis = updateHistoriaDto.Anamensis;
    await this.anamnesisRepository.update(updateHistoriaDto.IdAnamnesis, anamnesis);

    const antecedentes = new Antecedentes;
    antecedentes.Id = updateHistoriaDto.IdAntecedentes;
    antecedentes.IdHistoria = updateHistoriaDto.IdHistoria;
    antecedentes.Personales = updateHistoriaDto.Personales;
    antecedentes.Alergias = updateHistoriaDto.Alergias;
    antecedentes.Familiares = updateHistoriaDto.Familiares;
    antecedentes.Patologicos = updateHistoriaDto.Patologicos;
    await this.antecedentesRepository.update(updateHistoriaDto.IdAntecedentes, antecedentes);

    const atm = new Atm;
    atm.Id = updateHistoriaDto.IdAtm;
    atm.IdHistoria = updateHistoriaDto.IdHistoria;
    atm.Trayectoria = updateHistoriaDto.Trayectoria;
    atm.RuidosAtm = updateHistoriaDto.RuidosAtm;
    atm.Palpacion = updateHistoriaDto.Palpacion;
    atm.GradoApertura = updateHistoriaDto.GradoApertura;
    atm.Ganglios = updateHistoriaDto.Ganglios;
    await this.atmRepository.update(updateHistoriaDto.IdAtm, atm);

    const diagnosticoDefinitivo = new DiagnosticoDefinitivo;
    diagnosticoDefinitivo.Id = updateHistoriaDto.IdDiagnosticoDefinitivo;
    diagnosticoDefinitivo.IdHistoria = updateHistoriaDto.IdHistoria;
    diagnosticoDefinitivo.Diagnostico = updateHistoriaDto.DiagnosticoIngreso;
    await this.diagnosticoDefinitivoRepository.update(updateHistoriaDto.IdDiagnosticoDefinitivo, diagnosticoDefinitivo);

    const diagnosticoPresuntivo = new DiagnosticoPresuntivo;
    diagnosticoPresuntivo.Id = updateHistoriaDto.IdDiagnosticoPresuntivo;
    diagnosticoPresuntivo.IdHistoria = updateHistoriaDto.IdHistoria;
    diagnosticoPresuntivo.Diagnostico = updateHistoriaDto.DiagnosticoIngreso;
    await this.diagnosticoPresuntivoRepository.update(updateHistoriaDto.IdDiagnosticoPresuntivo, diagnosticoPresuntivo);

    const dolor = new Dolor;
    dolor.Id = updateHistoriaDto.IdDolor
    dolor.IdHistoria = updateHistoriaDto.IdHistoria;
    dolor.Temporal = updateHistoriaDto.Temporal;
    dolor.Masetero = updateHistoriaDto.Masetero;
    dolor.PterigoideoExterno = updateHistoriaDto.PterigoideoExterno;
    dolor.PterigoideoInterno = updateHistoriaDto.PterigoideoInterno;
    dolor.Esternocleidomastoideo = updateHistoriaDto.Esternocleidomastoideo;
    dolor.Digastrico = updateHistoriaDto.Digastrico;
    await this.dolorRepository.update(updateHistoriaDto.IdDolor, dolor);

    const examenAuxiliar = new ExamenAuxiliar;
    examenAuxiliar.Id = updateHistoriaDto.IdExamenAuxiliar;
    examenAuxiliar.IdHistoria = updateHistoriaDto.IdHistoria;
    examenAuxiliar.Detalle = updateHistoriaDto.DetalleExamenAuxiliar;
    await this.examenAuxiliarRepository.update(updateHistoriaDto.IdExamenAuxiliar, examenAuxiliar);

    const examenClinico = new ExamenClinico;
    examenClinico.Id = updateHistoriaDto.IdExamenClinico;
    examenClinico.IdHistoria = updateHistoriaDto.IdHistoria;
    examenClinico.Peso = updateHistoriaDto.Peso;
    examenClinico.Talla = updateHistoriaDto.Talla;
    examenClinico.Biotipo = updateHistoriaDto.Biotipo;
    examenClinico.Piel = updateHistoriaDto.Piel;
    examenClinico.AnexoCabello = updateHistoriaDto.AnexoCabello;
    examenClinico.AnexoUnias = updateHistoriaDto.AnexoUnias;
    examenClinico.PresionArterial = updateHistoriaDto.PresionArterial;
    examenClinico.FrecuenciaRespiratoria = updateHistoriaDto.FrecuenciaRespiratoria;
    examenClinico.Pulso = updateHistoriaDto.Pulso;
    examenClinico.Temperatura = updateHistoriaDto.Temperatura;
    await this.examenClinicoRepository.update(updateHistoriaDto.IdExamenClinico, examenClinico);


    const examenClinicoEstomatologico = new ExamenClinicoEstomatologico;
    examenClinicoEstomatologico.Id = updateHistoriaDto.IdExamenClinicoEstomatologico;
    examenClinicoEstomatologico.IdHistoria = updateHistoriaDto.IdHistoria;
    examenClinicoEstomatologico.Facie = updateHistoriaDto.Facie;
    examenClinicoEstomatologico.IdCraneo = updateHistoriaDto.IdCraneo;
    examenClinicoEstomatologico.IdCara = updateHistoriaDto.IdCara;
    examenClinicoEstomatologico.IdSimetria = updateHistoriaDto.IdSimetria;
    await this.examenClinicoEstomatologicoRepository.update(updateHistoriaDto.IdExamenClinicoEstomatologico, examenClinicoEstomatologico);

    const intrabucal = new ExamenIntrabucal;
    intrabucal.Id = updateHistoriaDto.IdExamenIntrabucal;
    intrabucal.IdHistoria = updateHistoriaDto.IdHistoria;
    intrabucal.LabiosComisuralabial = updateHistoriaDto.LabiosComisuralabial;
    intrabucal.PaladarDuro = updateHistoriaDto.PaladarDuro;
    intrabucal.Cigarrillos = updateHistoriaDto.Cigarrillos;
    intrabucal.PisoBoca = updateHistoriaDto.PisoBoca;
    intrabucal.Lengua = updateHistoriaDto.Lengua;
    intrabucal.Orofaringe = updateHistoriaDto.Orofaringe;
    intrabucal.Frenillos = updateHistoriaDto.Frenillos;
    intrabucal.Saliva = updateHistoriaDto.Saliva
    await this.examenIntrabucalRepository.update(updateHistoriaDto.IdExamenIntrabucal, intrabucal);

    const biologicas = new FuncionesBiologicas;
    biologicas.Id = updateHistoriaDto.IdFuncionesBiologicas;
    biologicas.IdHistoria = updateHistoriaDto.IdHistoria;
    biologicas.Apetito = updateHistoriaDto.Apetito;
    biologicas.Deposiciones = updateHistoriaDto.Deposiciones;
    biologicas.Sed = updateHistoriaDto.Sed;
    biologicas.Orina = updateHistoriaDto.Orina;
    biologicas.Suenio = updateHistoriaDto.Suenio;
    await this.funcionesBiologicasRepository.update(updateHistoriaDto.IdFuncionesBiologicas, biologicas);

    const resumen = new Resumen;
    resumen.Id = updateHistoriaDto.IdResumen;
    resumen.IdHistoria = updateHistoriaDto.IdHistoria;
    resumen.Resumen = updateHistoriaDto.ResumenAnamnesis;
    await this.resumenRepository.update(updateHistoriaDto.IdResumen, resumen);
  }

  async remove(id: number) {
    return `This action removes a #${id} historia`;
  }
}