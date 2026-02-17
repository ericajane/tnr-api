import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { ColonyModule } from './colony/colony.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'tnrdb',
    entities: [],
    synchronize: true,    
    logging: true,
  }), UserModule, CatModule, VolunteerModule, ColonyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
