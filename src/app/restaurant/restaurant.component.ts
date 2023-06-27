import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurant } from '../models/data.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  @Input() restaurant: Restaurant;
  @Output() chooseRestaurant = new EventEmitter();

  constructor(
    private dataService: DataService
  ) {}

  selectRestaurant(restaurant: Restaurant): void {
    this.chooseRestaurant.emit(restaurant);

    this.dataService.selectedRestaurant = restaurant;
    this.dataService.restaurantClicked.next(true);
  }
}
