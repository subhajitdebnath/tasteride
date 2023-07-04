import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/core/models/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  restaurant: Restaurant;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    // console.log(this.dataService.getRestaurants());
    // console.log(this.dataService.test)
    // this.dataService.test = [];
    // console.log(this.dataService.test)

    // this.restaurant = this.dataService.selectedRestaurant;

    this.dataService.restaurantClicked.subscribe((res: any) => {
      console.log(res);
      this.refreshRestaurant();
    });
  }

  refreshRestaurant(): void {
    this.restaurant = this.dataService.selectedRestaurant;
  }
}
