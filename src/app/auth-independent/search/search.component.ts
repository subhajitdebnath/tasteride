import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  keyword: any;
  products: any[] = [];
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.keyword = paramMap.get('keyword');
      console.log(this.keyword);

      this.searchProducts();
    });
  }

  searchProducts(): void {
    this.apiService.searchProducts(this.keyword).subscribe({
      next: (res: any) => {
        console.log(res);
        this.products = res.products;
      },
      error: err => console.error(err),
    });
  }

  toProductDetail(productId: string): void {
    this.router.navigate(['product', productId]);
  }
}
