import {Book} from '../model/book.model';
import {Observable} from 'rxjs/Observable';

export interface BooksService {

  getAll(): Observable<Book[]>;
  save(book: Book): Observable<Book>;
  update(book: Book): Observable<any>;
  remove(bookId: number): Observable<any>;

}
