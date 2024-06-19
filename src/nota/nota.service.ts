import { Injectable } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { Nota } from './entities/nota.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NotaService {

  constructor(
    @InjectRepository(Nota)
    private readonly notaRepository: Repository<Nota>
  ) { }

  async create(createNotaDto: CreateNotaDto) {
    const epicrisis = this.notaRepository.create(createNotaDto);
    return await this.notaRepository.save(epicrisis);
  }

  async findAll() {
    return await this.notaRepository.find();
  }

  async findOne(IdHistoria: number) {
    return await this.notaRepository.findOneBy({ IdHistoria });
  }

  async update(id: number, updateNotaDto: UpdateNotaDto) {
    return await this.notaRepository.update(id, updateNotaDto);
  }

  async remove(id: number) {
    return await this.notaRepository.softDelete(id);
  }
}