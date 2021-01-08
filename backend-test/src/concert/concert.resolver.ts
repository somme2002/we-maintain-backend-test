import { Concert } from 'src/concert/concert.model';
import { Resolver, Query, Args, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { ConcertService } from './concert.service';
import { ConcertFilter } from './concert.filter';
import { ConcertResult } from './concert.output';
import { Inject } from '@nestjs/common';
import { concat } from 'apollo-link';

@Resolver()
export class ConcertResolver {

    constructor(
        @Inject(ConcertService) private concertService: ConcertService
      ) { }
  
    
      @Query(returns => [ConcertResult])
      async concerts(@Args('concertFilter') concertFilter: ConcertFilter
    ) : Promise<ConcertResult[]> {
        console.log(concertFilter);
          
        const bandIds = concertFilter.bandIds ? concertFilter.bandIds.split(",").map(item => parseFloat(item)) : null;

        let concerts =  await this.concertService.find({
            ...concertFilter,
            bandIds:bandIds
        });

        return concerts.map(item => {
           
            const concertResult:ConcertResult=  {
                      band:item.band.name,
                      location:item.venue.name,
                      latitude:item.venue.latitude,
                      longitude:item.venue.longitude,
                      date:item.date
                    };
            return concertResult;
        })
      }

      @Query(returns => [Concert])
      async concertFindAll(): Promise<Concert[]> {         
        return await this.concertService.findAll();
}
}

