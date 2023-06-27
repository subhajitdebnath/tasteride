import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter, Restaurant } from '../models/data.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filter: Filter;
  @Output() chooseFilter = new EventEmitter();
  
  selectFilter(filter: Filter): void {
    this.chooseFilter.emit(filter);
  }

}
