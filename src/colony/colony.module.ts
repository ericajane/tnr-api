import { Module } from '@nestjs/common';
import { ColonyService } from './colony.service';
import { ColonyController } from './colony.controller';

@Module({
  controllers: [ColonyController],
  providers: [ColonyService],
})
export class ColonyModule {}
