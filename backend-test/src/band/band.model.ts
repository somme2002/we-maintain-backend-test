import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Concert } from 'src/concert/concert.model';
@ObjectType()
@Entity()
export class Band {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;
  @Field()
  @Column({ length: 500, nullable: false })
  name: string;

  @OneToMany(() => Concert, concerts => concerts.band)
  concerts: Concert[];
  
}