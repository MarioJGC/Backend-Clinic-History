import { Injectable } from '@nestjs/common';
import { CreateInterpretacionDto } from './dto/create-interpretacion.dto';
import { UpdateInterpretacionDto } from './dto/update-interpretacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Interpretacion } from './entities/interpretacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InterpretacionService {

  constructor(
    @InjectRepository(Interpretacion)
    private readonly interpretacionRepository: Repository<Interpretacion>
  ) { }

  async create(createInterpretacionDto: CreateInterpretacionDto) {
    const notas = this.interpretacionRepository.create(createInterpretacionDto);
    return await this.interpretacionRepository.save(notas);
  }

  async findAll() {
    return await this.interpretacionRepository.find();
  }

  async findOne(IdHistoria: number) {
    return await this.interpretacionRepository.findOneBy({ IdHistoria });
  }

  async update(id: number, updateInterpretacionDto: UpdateInterpretacionDto) {
    return await this.interpretacionRepository.update(id, updateInterpretacionDto);
  }

  async remove(id: number) {
    return await this.interpretacionRepository.softDelete(id);
  }
}