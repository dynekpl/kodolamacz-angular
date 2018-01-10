import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import {BooksModule} from './books/books.module';
import {Api} from './api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BooksModule
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
