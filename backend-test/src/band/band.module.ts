import { Module } from '@nestjs/common';
import { BandService } from './band.service';
import { BandResolver } from './band.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Band } from 'src/band/band.model';

@Module({
    imports: [TypeOrmModule.forFeature([Band])],
    providers: [BandService, BandResolver],
    exports: [BandService]
})
export class BandModule {}
