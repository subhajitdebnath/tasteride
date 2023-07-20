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
  count = 0;
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

  increaseQuantity(productId: number): void {
    this.cartService.increaseQuantity(productId);
  }

  decreaseQuantity(productId: number): void {
    this.cartService.decreaseQuantity(productId);
  }
  addAddress():void{
    this.router.navigate(['user/address']);
  }

  // increment() {
  //   this.count++;
  // }
  // decrement() {
  //   this.count--;
  // }

  // getCount() : void {
  //   console.log(this.count);
  // }
}
