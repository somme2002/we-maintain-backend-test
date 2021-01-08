import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ConcertFilter {

  @Field({ nullable: true })
  bandIds?: string;


  @Field({ nullable: true })
  latitude?: number;

  
  @Field({ nullable: true })
  longitude?: number;

  @Field({ nullable: true })
  radius?: number;
}