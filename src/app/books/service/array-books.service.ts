import {Inject, Injectable, Optional} from '@angular/core';
import {Book} from '../model/book.model';
import {BooksService} from './books.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';

@Injectable()
export class ArrayBooksService implements BooksService {

  constructor(@Optional() @Inject('BooksData') private books: Book[]) {
    if (!books) {
      this.books = [];
    }
  }

  getAll(): Observable<Book[]> {
    return Observable.of(this.books);
  }

  save(book: Book): Observable<Book> {
    book.id = this.nextId;
    this.books.push(book);
    return Observable.of(book);
  }

  update(book: Book): Observable<void> {
    const bookIndex = this.findBookIndex(book.id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = book;
    }
    return Observable.empty();
  }

  remove(bookId: number): Observable<void> {
    const bookIndex = this.findBookIndex(bookId);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex);
    }
    return Observable.empty();
  }

  search(property: string, query: string): Observable<Book[]> {
    throw new Error('Not implemented yet');
    //return this.getAll();
  }

  getById(bookId: number): Observable<Book> {
    throw new Error('Not implemented yet');
  }

  private get nextId(): number {
    return Date.now();
  }

  private findBookIndex(bookId: number): number {
    return this.books.findIndex(currentBook => bookId === currentBook.id);
  }

}
