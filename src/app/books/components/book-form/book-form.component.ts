import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../model/book.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input()
  book = Book;
  @Output()
  save = new EventEmitter();
  @Output()
  cancel = new EventEmitter();
  isEditable = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (!this.book) {
      this.book = this.route.snapshot.data.book || new Book();
      this.isEditable = false;
    }
  }

}
