import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-books-panel',
  templateUrl: './books-panel.component.html',
  styleUrls: ['./books-panel.component.css']
})
export class BooksPanelComponent{

  @Input()
  books = [];
  selectedBook = null;
  editedBook = null;
  select(book) {
    this.selectedBook = book;
    this.editedBook = Object.assign({}, book);
  }
  save(modifiedBook) {
    Object.assign(this.selectedBook, modifiedBook);
    this.reset();
  }
  reset() {
    this.selectedBook = null;
    this.editedBook = null;
  }
}
