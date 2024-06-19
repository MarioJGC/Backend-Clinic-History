import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoriaService } from './historia.service';
import { CreateHistoriaDto } from './dto/create-historia.dto';
import { UpdateHistoriaDto } from './dto/update-historia.dto';

@Controller('historia')
export class HistoriaController {

  constructor(private readonly historiaService: HistoriaService) { }

  @Post()
  create(@Body() createHistoriaDto: CreateHistoriaDto) {
    return this.historiaService.create(createHistoriaDto);
  }

  @Get()
  findAll() {
    return this.historiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoriaDto: UpdateHistoriaDto) {
    return this.historiaService.update(+id, updateHistoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historiaService.remove(+id);
  }
}