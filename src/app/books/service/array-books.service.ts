import {Inject, Injectable, Optional} from '@angular/core';
import {Book} from '../model/book.model';

@Injectable()
export class ArrayBooksService{

  constructor(@Optional() @Inject('BooksData') private books: Book[]){
    if (!books) {
      this.books = [];
    }
  }

  getAll(): Book[] {
    return this.books;
  }

  save(book: Book): Book {
    book.id = this.nextId;
    this.books.push(book);
    return book;
  }

  update(book: Book) {
    const bookIndex = this.findBookIndex(book.id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = book;
    }
  }

  remove(bookId: number) {
    const bookIndex = this.findBookIndex(bookId);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex);
    }
  }

  private get nextId(): number {
    return Date.now();
  }

  private findBookIndex(bookId: number): number {
    return this.books.findIndex(currentBook => bookId === currentBook.id);
  }

}
