import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pet } from './pets/entities/pet.entity';
import { PetsModule } from './pets/pets.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Pet],
      synchronize: true,
    }),
    
    PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
