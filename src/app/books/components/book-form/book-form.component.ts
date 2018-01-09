import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent{

  @Input()
  book = {};
  @Output()
  save = new EventEmitter();
  @Output()
  cancel = new EventEmitter();

}
