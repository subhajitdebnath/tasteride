import { Injectable } from '@angular/core';
import { Filter, Restaurant } from '../models/data.model';
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
  private filters: Filter[] = [
    {
      name: 'More than 499',
      value: 499,
      type: 'cost'
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
  selectedFilter : Filter;
  filterClicked = new BehaviorSubject(false);

  constructor() { }
  getFilters() : Filter[] {
    return this.filters;
  }

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }
}
