import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = [
    {
      id: 1,
      title: 'Angular in action',
      authors: 'Jan Kowalski',
      category: '#00ff00',
      bestseller: true,
      rating: 5
    },
    {
      id: 2,
      title: 'React in action',
      authors: 'Marek Nowak',
      category: '#00ff00',
      bestseller: false,
      rating: 3
    }
  ];
}
