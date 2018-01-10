import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {BooksService} from '../../service/books.service';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.css']
})
export class BooksSearchComponent {

  query: string;
  @Output()
  searchBook = new EventEmitter();

  constructor(@Inject('BooksService') private booksService: BooksService) {
  }

  search() {
    const observableResult = this.booksService.search('title', this.query);
    this.searchBook.emit(observableResult);
  }

}
