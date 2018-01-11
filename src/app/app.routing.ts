import {environment} from '../environments/environment';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  /*{
    path: '**',
    redirectTo: 'books'
  }*/
];

export const routerModule = RouterModule.forRoot(routes, {
  enableTracing: environment.enableTracing
});
