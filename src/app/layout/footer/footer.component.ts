import { Component } from '@angular/core';
import { Filter, Restaurant } from 'src/app/core/models/data.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  filter: Filter;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {


    this.dataService.filterClicked.subscribe((res: any) => {
      console.log(res);
      this.refreshFilter();
    });
  }

  refreshFilter(): void {
    this.filter = this.dataService.selectedFilter;
  }
}
