import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurant } from '../models/data.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  @Input() restaurant: Restaurant;
  @Output() chooseRestaurant = new EventEmitter();

  selectRestaurant(restaurant: Restaurant): void {
    this.chooseRestaurant.emit(restaurant);
  }
}
