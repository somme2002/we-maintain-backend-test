import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Concert } from 'src/concert/concert.model';
@ObjectType()
@Entity()
export class Venue {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;
  @Field()
  @Column({ length: 500, nullable: false })
  name: string;

  @Field()
  @Column({type:'float'})
  longitude: number;

  @Field()
  @Column({type:'float'})
  latitude: number; 

  @OneToMany(() => Concert, concerts => concerts.venue)
  concerts: Concert[];
}