import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    console.log(this.cartService.cartDetail);
  }
}
