import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasteride';


  foods: any[] = [
    {
      id: 1,
      name: 'Pizza'
    },
    {
      id: 2,
      name: 'Biriyani'
    }
  ]
}
