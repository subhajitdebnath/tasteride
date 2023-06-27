import { Injectable } from '@angular/core';
import { Restaurant } from '../models/data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Pizza Hut',
      costForTwo: 500,
      type: 'nonveg'
    }
  ];

  test: Restaurant[] = [
    {
      id: 1,
      name: 'Pizza Hut',
      costForTwo: 500,
      type: 'nonveg'
    }
  ];

  selectedRestaurant: Restaurant;
  restaurantClicked = new BehaviorSubject(false);

  constructor() { }

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }
}
