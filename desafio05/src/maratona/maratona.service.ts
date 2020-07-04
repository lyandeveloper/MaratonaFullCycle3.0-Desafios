import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Maratona } from './maratona.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class MaratonaService {
    constructor(
      @InjectRepository(Maratona)
      private maratonaRepository: Repository<Maratona>,
  ) { }

  async  findAll(): Promise<Maratona[]> {
    return await this.maratonaRepository.find();
  }

  async  create(maratona: Maratona): Promise<Maratona> {
      return await this.maratonaRepository.save(maratona);
  } 
}
