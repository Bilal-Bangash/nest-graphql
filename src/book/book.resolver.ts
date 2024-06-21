import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Book')
export class BookResolver {
  @Query('books')
  getAllBooks() {
    return [
      { id: 1, title: 'Book 1', price: 500 },
      { id: 2, title: 'Book 2', price: 500 },
      { id: 3, title: 'Book 3', price: 500 },
    ];
  }
}
