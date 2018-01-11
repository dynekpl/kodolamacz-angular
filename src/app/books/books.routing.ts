import {Route, RouterModule} from "@angular/router";
import {BooksPanelComponent} from "./components/books-panel/books-panel.component";

const routes: Route[] = [
  {
    path: 'books',
    component: BooksPanelComponent
  }
];

export const routerModule = RouterModule.forChild(routes);
