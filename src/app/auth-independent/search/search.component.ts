import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  keyword: any;
  products: any[] = [];
  minPrice: any;
  maxPrice: any;
  ratin: any;
  sourceTypeControl = new FormControl('');
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
   
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.keyword = paramMap.get('keyword');
      console.log(this.keyword);
      
      this.keyword = !this.keyword ? '' : this.keyword;
      this.searchProducts();
    });
  }

  searchProducts(): void {
    this.apiService.searchProducts(this.keyword).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.products = res.products;
      },
      error: err => console.error(err),
    });
  }

  toProductDetail(productId: string): void {
    this.router.navigate(['product', productId]);
  }
  globalFilter(e):void{
    console.log(e.rate);
    this.apiService.searchProducts(this.keyword).subscribe({
      next: (res: any) => {
        console.log(res);
        this.products = res.products;
        this.products = this.products.filter((x) => x.rating >= e.rate);
        if(e.min!='' || e.max!=''){
          e.min = e.min === '' ? 0 : e.min;
          e.max = e.max === '' ? Infinity : e.max;
          this.products = this.products.filter((x) => x.price >= e.min && x.price <= e.max)
        }

      },
      error: err => console.error(err),
    });
    console.log(this.products);
  }

  resetFilter() :void {
    this.minPrice = '';
    this.maxPrice = '';
    this.ratin = '';

    this.searchProducts();
  }

  getData() {
    console.log('hi')
  }
}
