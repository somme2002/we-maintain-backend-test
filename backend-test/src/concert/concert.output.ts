import { ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class ConcertResult {

  @Field({nullable: true })
  band?: string;


  @Field({nullable: true })
  location?: string;

  @Field({nullable: true })
  latitude?: number;

  
  @Field({nullable: true })
  longitude?: number;

  @Field({nullable: true })
  date?: number;
  
}