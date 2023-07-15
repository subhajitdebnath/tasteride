import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDetail: any[] = [];
  quantity: any;
  resArr: any[];

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
    console.log(payload);
    this.lsService.removeLSData('cart');
    this.lsService.setLSData('cart', payload);
  }
  addNewCart(payload): void {
    console.log(payload);
    this.cartDetail.push(payload);
    this.resArr = Array.from(new Set(this.cartDetail.map(obj => JSON.stringify(obj))))
      .map(str => JSON.parse(str));
    this.quantity = (this.cartDetail.filter((x) => x.id == payload.id)).length;
    this.lsService.removeLSData('cart');
    this.lsService.setLSData('cart', this.cartDetail);
  }
}
