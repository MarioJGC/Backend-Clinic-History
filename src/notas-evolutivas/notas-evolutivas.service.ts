import { Injectable } from '@nestjs/common';
import { CreateNotasEvolutivaDto } from './dto/create-notas-evolutiva.dto';
import { UpdateNotasEvolutivaDto } from './dto/update-notas-evolutiva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NotasEvolutivas } from './entities/notas-evolutiva.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotasEvolutivasService {

  constructor(
    @InjectRepository(NotasEvolutivas)
    private readonly repository: Repository<NotasEvolutivas>
  ) { }

  async create(createNotasEvolutivaDto: CreateNotasEvolutivaDto) {
    const notas = this.repository.create(createNotasEvolutivaDto);
    return await this.repository.save(notas);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(IdHistoria: number) {
    return await this.repository.find({ where: { IdHistoria } });
  }

  async update(id: number, updateNotasEvolutivaDto: UpdateNotasEvolutivaDto) {
    return await this.repository.update(id, updateNotasEvolutivaDto);
  }

  async remove(id: number) {
    return await this.repository.softDelete(id);
  }
}