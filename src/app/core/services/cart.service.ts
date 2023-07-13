import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDetail: any[] = [];

  constructor(
    private lsService: LocalStorageService
  ) {
    let cart = this.lsService.getLSData('cart');
    if(cart) {
      this.cartDetail = cart;
    }
    console.log(this.cartDetail)
  }

  addCart(payload): void {
    this.cartDetail.push(payload);
    this.lsService.setLSData('cart', this.cartDetail);
  }
}
