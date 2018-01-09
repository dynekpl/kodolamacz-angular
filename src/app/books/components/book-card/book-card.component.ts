import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent{

  @Input()
  book = {};
  @Input()
  isSelected = false;
  @Output()
  bookSelected = new EventEmitter();

  select() {
    this.bookSelected.emit(this.book);
  }

}
