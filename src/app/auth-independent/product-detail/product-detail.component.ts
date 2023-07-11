import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  productId: any;
  product: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(): void {
    this.apiService.getProductById(this.productId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.product = res;
      },
      error: err => console.error(err),
    });
  }
}
