import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColonyService } from './colony.service';
import { CreateColonyDto } from './dto/create-colony.dto';
import { UpdateColonyDto } from './dto/update-colony.dto';

@Controller('colony')
export class ColonyController {
  constructor(private readonly colonyService: ColonyService) {}

  @Post()
  create(@Body() createColonyDto: CreateColonyDto) {
    return this.colonyService.create(createColonyDto);
  }

  @Get()
  findAll() {
    return this.colonyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colonyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColonyDto: UpdateColonyDto) {
    return this.colonyService.update(+id, updateColonyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colonyService.remove(+id);
  }
}
