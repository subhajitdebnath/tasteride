import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  products: any[] = [];

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.apiService.getProducts().subscribe({
      next: (res: any) => {
        console.log(res.products);
        this.products = res.products;
      },
      error: err => console.error(err),
    });
  }
}
