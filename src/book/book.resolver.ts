import { Resolver, Query } from '@nestjs/graphql';
import { Book } from './book.schema';
import { Book as IBook } from '../graphql';

@Resolver((of) => Book)
export class BookResolver {
  @Query((returns) => [Book], { name: 'books', nullable: true })
  getAllBooks(): IBook[] {
    let arr: IBook[] = [
      { id: 1, title: 'Book 1', price: 500 },
      { id: 2, title: 'Book 2', price: 500 },
      { id: 3, title: 'Book 3', price: 500 },
    ];
    return arr;
  }
}
