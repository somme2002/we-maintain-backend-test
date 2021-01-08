import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Band } from 'src/band/band.model';
import { Venue } from 'src/venue/venue.model';

@ObjectType()
@Entity()
export class Concert {
  
  @Field({ nullable: true })
  @ManyToOne(() => Band, band => band.concerts, { primary: true, onDelete: 'CASCADE'})
  band: Band;

  @Field({ nullable: true })
  @ManyToOne(() => Venue, venue => venue.concerts, { primary: true,onDelete: 'CASCADE'})
  venue: Venue;

  @Field({ nullable: true })
  @Column({type:'float' , primary: true})
  date: number;
  
}
