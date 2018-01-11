import {Route, RouterModule} from "@angular/router";
import {BooksPanelComponent} from "./components/books-panel/books-panel.component";
import {BookFormComponent} from './components/book-form/book-form.component';
import {environment} from '../../environments/environment';
import {BooksListComponent} from './components/books-list/books-list.component';

const routes: Route[] = [
  {
    path: 'books',
    component: BooksPanelComponent
  },
  {
    path: 'books-list',
    component: BooksListComponent,
    data: { env: environment }
  },
  {
    path: 'books-list/:id',
    component: BookFormComponent
  }
];

export const routerModule = RouterModule.forChild(routes);
