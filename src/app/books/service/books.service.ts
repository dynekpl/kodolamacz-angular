import {Book} from '../model/book.model';

export interface BooksService {

  getAll(): Book[];
  save(book: Book): Book;
  update(book: Book);
  remove(bookId: number);

}
