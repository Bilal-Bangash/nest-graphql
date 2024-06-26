import { Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => String)
export class AppService {
  @Query((returns) => String)
  index(): String {
    return 'NestJs GraphQL Server';
  }
}
