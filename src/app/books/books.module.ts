import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import {SharedModule} from '../shared/shared.module';
import { BookFormComponent } from './book-form/book-form.component';
import {FormsModule} from '@angular/forms';
import { BooksPanelComponent } from './books-panel/books-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    BookCardComponent,
    BookFormComponent,
    BooksPanelComponent
  ],
  exports: [
    BookCardComponent,
    BookFormComponent,
    BooksPanelComponent
  ]
})
export class BooksModule { }
