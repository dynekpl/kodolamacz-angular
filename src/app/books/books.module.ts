import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import {SharedModule} from '../shared/shared.module';
import { BookFormComponent } from './components/book-form/book-form.component';
import {FormsModule} from '@angular/forms';
import { BooksPanelComponent } from './components/books-panel/books-panel.component';
import { ArrayBooksService } from './service/array-books.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpBooksService} from './service/http-books.service';
import { BooksSearchComponent } from './components/books-search/books-search.component';
import {routerModule} from './books.routing';
import { BooksListComponent } from './components/books-list/books-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    routerModule,
    HttpClientModule,
  ],
  declarations: [
    BookCardComponent,
    BookFormComponent,
    BooksPanelComponent,
    BooksSearchComponent,
    BooksListComponent
  ],
  exports: [
    BookCardComponent,
    BookFormComponent,
    BooksPanelComponent
  ],
  providers: [
    //ArrayBooksService,
    {
      provide: 'BooksService',
      useClass: HttpBooksService
    },
    // {
    //   provide: 'BooksService',
    //   useFactory: booksServiceFactory,
    //   deps: ['BooksData']
    // },
    // {
    //   provide: 'BooksData',
    //   useValue: booksData
    // }
  ]
})
export class BooksModule { }

// export function booksServiceFactory(booksData: Book[]) {
//   return new ArrayBooksService(booksData);
// }

