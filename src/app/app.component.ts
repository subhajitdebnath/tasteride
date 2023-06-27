import { Component } from '@angular/core';
import { Filter, Restaurant } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasteride';
  loader = false;
  selectedRestaurant: Restaurant;
  selectedFilter: Filter;
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

  filters: Filter[] = [
    {
      name: 'More than 499',
      value: 499,
      type: 'cost',
    },{
      name: 'More than 299',
      value: 299,
      type: 'cost',
    },{
      name: 'Veg',
      value: 'veg',
      type: 'type',
    },{
      name: 'Non Veg',
      value: 'nonveg',
      type: 'type',
    },{
      name: 'Clear Filters',
      value: 0,
      type: 'reset',
    }
  ];


  allRestaurants = this.restaurants;

  filterRestaurants(index: number): void {
    let filter: Filter = this.filters[index];
    this.restaurants = this.allRestaurants;

    if(filter.type === 'cost') {
      this.restaurants = this.restaurants.filter(item => item.costForTwo > +filter.value);
    } else if(filter.type === 'type') {
      this.restaurants = this.restaurants.filter(item => item.type === filter.value);
    }
  }

  showRestaurant(e: any): void {
    // console.log(e);
    this.selectedRestaurant = e;
  }
  showFilter(e: any): void {
    console.log(e);
    this.restaurants = this.allRestaurants;

    if(e.type === 'cost') {
      this.restaurants = this.restaurants.filter(item => item.costForTwo > +e.value);
    } else if(e.type === 'type') {
      this.restaurants = this.restaurants.filter(item => item.type === e.value);
    }
    
    this.selectedFilter = e;
  }

  // getChange() {
  //   console.log('test');
  // }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
}
