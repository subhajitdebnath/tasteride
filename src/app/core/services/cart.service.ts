import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDetail: any[] = [];
  quantity: any;
  resArr: any[];

  cart = new BehaviorSubject(this.cartDetail);

  constructor(
    private lsService: LocalStorageService
  ) {
    let cart = this.lsService.getLSData('cart');
    if(cart) {
      this.cartDetail = cart;
      this.changeCart();
    }
    // console.log(this.cartDetail)
  }

  addCart(payload): void {
     console.log(payload);

    /** Checking if product already exists in the cart */
    let productIndex = this.cartDetail.findIndex(item => item.id === payload.id);
    // console.log(productIndex);
    if(productIndex >=0) {
      this.cartDetail[productIndex].quantity += 1;
    } else {
      this.cartDetail.push(payload);
    }
    this.changeCart();
    this.lsService.setLSData('cart', this.cartDetail);
  }

  increaseQuantity(productId: number): void {
    let product = this.cartDetail.find(item => item.id === productId);
    if(product) {
      this.addCart(product);
    }
  }

  decreaseQuantity(productId: number): void {
    console.log(productId)
    /** checking if the product exists */
    let productIndex = this.cartDetail.findIndex(item => item.id === productId);
    if(productIndex >= 0) {
      /** checking for quantity */
      if(this.cartDetail[productIndex].quantity > 1) {
        this.cartDetail[productIndex].quantity -= 1;
      } else {
        this.cartDetail.splice(productIndex, 1);
      }
      this.changeCart();
      this.lsService.setLSData('cart', this.cartDetail);
    }
  }

  changeCart(): void {
    this.cart.next(this.cartDetail);
  }


}
