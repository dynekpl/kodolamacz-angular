import {Component, Inject, Input, OnInit} from '@angular/core';
import {Book} from '../../model/book.model';
import {ArrayBooksService} from '../../service/array-books.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-books-panel',
  templateUrl: './books-panel.component.html',
  styleUrls: ['./books-panel.component.css']
})
export class BooksPanelComponent {

  books: Book[] = [];
  selectedBook: Book = null;
  editedBook: Book = null;
  isLoading = false;

  constructor(private booksService: ArrayBooksService) {
    this.refresh();
  }

  select(book: Book) {
    this.selectedBook = book;
    this.editedBook = Object.assign({}, book);
  }

  save(book: Book) {
    if (book.id) {
      this.subscribe(this.booksService.update(book));
    } else {
      this.subscribe(this.booksService.save(book));
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
    this.subscribe(this.booksService.remove(this.editedBook.id));
    this.reset();
  }

  refresh() {
    this.isLoading = true;
    this.booksService.getAll()
      .subscribe(
        books => this.books = books,
        ex => { console.log(ex); this.isLoading = false; },
        () => this.isLoading = false
      );
  }

  private subscribe(observable: Observable<any>) {
    observable.subscribe(() => this.refresh());
  }
}
