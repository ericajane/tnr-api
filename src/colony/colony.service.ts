import { Injectable } from '@nestjs/common';
import { CreateColonyDto } from './dto/create-colony.dto';
import { UpdateColonyDto } from './dto/update-colony.dto';

@Injectable()
export class ColonyService {
  create(createColonyDto: CreateColonyDto) {
    return 'This action adds a new colony';
  }

  findAll() {
    return `This action returns all colony`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colony`;
  }

  update(id: number, updateColonyDto: UpdateColonyDto) {
    return `This action updates a #${id} colony`;
  }

  remove(id: number) {
    return `This action removes a #${id} colony`;
  }
}
