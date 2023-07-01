import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  id: any;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('ngOnInit Deshboard');
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Deshboard');
  }
}
