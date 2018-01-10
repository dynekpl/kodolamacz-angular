import {Component, Inject, Input, OnInit} from '@angular/core';
import {Book} from '../../model/book.model';
import {BooksService} from '../../service/books.service';

@Component({
  selector: 'app-books-panel',
  templateUrl: './books-panel.component.html',
  styleUrls: ['./books-panel.component.css']
})
export class BooksPanelComponent {

  books: Book[] = [];
  selectedBook: Book = null;
  editedBook: Book = null;

  constructor(@Inject('BooksService') private booksService: BooksService) {
    this.refresh();
  }

  select(book: Book) {
    this.selectedBook = book;
    this.editedBook = Object.assign({}, book);
  }

  save(book: Book) {
    if (book.id) {
      this.booksService.update(book);
    } else {
      this.booksService.save(book);
    }
    this.reset();
  }

  reset() {
    this.selectedBook = null;
    this.editedBook = null;
  }

  add() {
    this.editedBook = new Book();
  }

  remove() {
    this.booksService.remove(this.editedBook.id);
    this.reset();
  }

  refresh() {
    this.books = this.booksService.getAll();
  }
}
