import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cart: any[] = [];
  
  constructor(
    private cartService: CartService,
    private lsService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.cartService.cartDetail);
    this.cart = this.cartService.cartDetail;
    this.cartDetails();
  }
  cartDetails(): void {
    this.cart = this.cartService.cartDetail;

  }
  removeCart(productId: string): void {
    this.cart = this.cartService.cartDetail;
    let productIndex = this.cart.findIndex(item => item.id === productId);
    console.log(productIndex);
    if (productIndex !== -1) {
    this.cart.splice(productIndex, 1);
    console.log(this.cart);
    this.lsService.removeLSData('cart');
    this.lsService.setLSData('cart', this.cart);
    this.router.navigate(['user/cart']);
  }

  }
}
