import { Injectable } from '@nestjs/common';
import { CreateEpicrisisDto } from './dto/create-epicrisis.dto';
import { UpdateEpicrisisDto } from './dto/update-epicrisis.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Epicrisis } from './entities/epicrisis.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EpicrisisService {

  constructor(
    @InjectRepository(Epicrisis)
    private readonly epicrisisRepository: Repository<Epicrisis>
  ) { }

  async create(createEpicrisisDto: CreateEpicrisisDto) {
    const epicrisis = this.epicrisisRepository.create(createEpicrisisDto);
    return await this.epicrisisRepository.save(epicrisis);
  }

  async findAll() {
    return await this.epicrisisRepository.find();
  }

  async findOne(IdHistoria: number) {
    return await this.epicrisisRepository.findOneBy({ IdHistoria });
  }

  async update(id: number, updateEpicrisisDto: UpdateEpicrisisDto) {
    return await this.epicrisisRepository.update(id, updateEpicrisisDto);
  }

  async remove(id: number) {
    return await this.epicrisisRepository.softDelete(id);
  }
}