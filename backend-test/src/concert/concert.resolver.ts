import { Concert } from 'src/concert/concert.model';
import { Resolver, Query, Args, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { ConcertService } from './concert.service';
import { ConcertFilter } from './concert.filter';
import { Inject } from '@nestjs/common';

@Resolver()
export class ConcertResolver {

    constructor(
        @Inject(ConcertService) private concertService: ConcertService
      ) { }
  
    
      @Query(returns => [Concert])
      async concerts(@Args('concertFilter') concertFilter: ConcertFilter
    ) : Promise<Concert[]> {
        console.log(concertFilter);
          
        const bandIds = concertFilter.bandIds ? concertFilter.bandIds.split(",").map(item => parseFloat(item)) : null;

        return await this.concertService.find({
            ...concertFilter,
            bandIds:bandIds
        });
      }

      @Query(returns => [Concert])
      async concertFindAll(): Promise<Concert[]> {
        return await this.concertService.findAll();
      }
}

