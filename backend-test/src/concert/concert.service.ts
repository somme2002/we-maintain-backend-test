import { Injectable } from '@nestjs/common';
import { Concert } from 'src/concert/concert.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';

@Injectable()
export class ConcertService {

    constructor(
        @InjectRepository(Concert)
        private concertRepository: Repository<Concert>
      ) { }
    
      findAll(): Promise<Concert[]> {
        return this.concertRepository.createQueryBuilder("concert").execute();
      }

    
      find(filter:any): Promise<Concert[]> {

    
        let qb = this.concertRepository.createQueryBuilder("concert")
        .leftJoinAndSelect("concert.venue", "venue")
        .leftJoinAndSelect("concert.band", "band");
        if (filter.bandIds && filter.bandIds.length != 0) qb.andWhere("band.id in (:...bandIds)", {bandIds: filter.bandIds});
        if (filter.latitude && filter.longitude && filter.radius) qb.andWhere(`calculate_distance(venue.latitude, venue.longitude, ${filter.latitude}, ${filter.longitude}) <= ${filter.radius}`)
      
        return qb.getMany();
      }

}
