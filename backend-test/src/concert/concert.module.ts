import { Module } from '@nestjs/common';
import { ConcertService } from './concert.service';
import { ConcertResolver } from './concert.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concert } from './concert.model';

@Module({
    imports: [TypeOrmModule.forFeature([Concert])],
    providers: [ConcertService, ConcertResolver],
    exports: [ConcertService]
})
export class ConcertModule {
}
