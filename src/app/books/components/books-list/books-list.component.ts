import {Component, Inject, OnInit} from '@angular/core';
import {BooksService} from '../../service/books.service';
import {Observable} from 'rxjs/Observable';
import {Book} from '../../model/book.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {

  books: Observable<Book[]>;

  constructor(@Inject('BooksService') private booksService: BooksService, route: ActivatedRoute) {
    this.books = this.booksService.getAll();
    console.log(`Base url: ${route.snapshot.data.env.baseUrl}`);
  }

}
