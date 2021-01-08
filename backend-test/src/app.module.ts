import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcertService } from './concert/concert.service';
import { ConcertResolver } from './concert/concert.resolver';
import { ConcertModule } from './concert/concert.module';
import { BandModule } from './band/band.module';
import ORM_CONFIG from '../config/orm.config';

@Module({

  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot(
      ORM_CONFIG),
    ConcertModule,
    BandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
