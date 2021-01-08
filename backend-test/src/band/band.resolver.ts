import { BandService } from './band.service';
import { Resolver, Query, Args, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Band } from './band.model';


@Resolver(of => Band)
export class BandResolver {
  constructor(
    @Inject(BandService) private bandService: BandService
  ) { }
  @Query(returns => Band)
  async band(@Args('id') id: string): Promise<Band> {
    return await this.bandService.findOne(id);
  }

  @Query(returns => [Band])
  async bands(): Promise<Band[]> {
    return await this.bandService.findAll();
  }

}
