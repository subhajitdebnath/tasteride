import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  productList: any[] = [
    {
      id: 1,
      name: 'Iphone 14'
    },{
      id: 2,
      name: 'Macbook Pro M1'
    }
  ]
}
