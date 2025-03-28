import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PetRole } from './entities/petRole';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private readonly repository: Repository<Pet>) {}


    create(dto: CreatePetDto) {
      const pet = this.repository.create({
          ...dto,
          animal: PetRole[dto.animal as keyof typeof PetRole], // Método de converter string para Enum!
      });
      return this.repository.save(pet);
  }
  

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({id});
  }


  async update(id: number, dto: UpdatePetDto) {
    const pet = await this.repository.findOneBy({ id });
    if (!pet) return null;

    this.repository.merge(pet, {
        ...dto,
        animal: dto.animal ? PetRole[dto.animal as keyof typeof PetRole] : pet.animal, // Método de converter string para Enum!
    });

    return this.repository.save(pet);
  }


  async remove(id: number) {
    const pet = await this.repository.findOneBy({id});  
    if (!pet) return null;
    return this.repository.remove(pet);
  }
}
