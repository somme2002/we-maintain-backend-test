import { Band } from './band.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class BandService {

  constructor(
    @InjectRepository(Band)
    private bandRepository: Repository<Band>
  ) { }

  findAll(): Promise<Band[]> {
    return this.bandRepository.find();
  }

  findOne(id: string): Promise<Band> {
    return this.bandRepository.findOne(id);
  }
}