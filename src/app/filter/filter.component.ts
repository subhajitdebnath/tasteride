import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter, Restaurant } from '../models/data.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filter: Filter;
  @Output() chooseFilter = new EventEmitter();

  constructor(
    private dataService: DataService
  ) {}
  
  selectFilter(filter: Filter): void {
    this.chooseFilter.emit(filter);

    this.dataService.selectedFilter = filter;
    this.dataService.filterClicked.next(true);
  }

}
