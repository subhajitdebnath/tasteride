import { Component } from '@angular/core';
import { Restaurant } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasteride';
  loader = false;
  restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Pizza Hut',
      costForTwo: 500,
      type: 'nonveg'
    },
    {
      id: 2,
      name: 'Dominos',
      costForTwo: 300,
      type: 'nonveg'
    },
    {
      id: 2,
      name: 'Dhaba Abc',
      costForTwo: 200,
      type: 'veg'
    }
  ];

  selectedRestaurant!: Restaurant;

  allRestaurants = this.restaurants;

  filterRestaurants(value: number): void {
    console.log(value);
    this.restaurants = this.allRestaurants;
    this.restaurants = this.restaurants.filter(item => item.costForTwo > value);
  }
  filterRestaurantsType(value: string): void {
    console.log(value);
    this.restaurants = this.allRestaurants;
    this.restaurants = this.restaurants.filter(item => item.type === value);

  }

  selectRestaurant(event: any, restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
    console.log(event);
    event.stopPropagation();
    alert(this.selectedRestaurant.name);
  }

  selectRestaurant1(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;

    alert(this.selectedRestaurant.costForTwo);
  }
}
