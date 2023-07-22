import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  addressDetail: any[]=[];

  constructor(
    private lsService: LocalStorageService
  ) {
    this.addressDetail = this.getAddress();
  }
   addAddress(payload): void {
    this.addressDetail.push(payload);
    this.lsService.setLSData('address', this.addressDetail);
  }
  deleteAddress(id: string): void {
    console.log(id)
    // return;
    /** checking if the product exists */
    let addressIndex = this.addressDetail.findIndex(item => item.id === id);
    if(addressIndex >= 0) {
      /** checking for address */
      console.log(addressIndex);
      this.addressDetail.splice(addressIndex, 1);
      console.log(this.addressDetail);
    }
    this.lsService.setLSData('address', this.addressDetail);
  }
  getAddress(): any[]{
    let addressData = this.lsService.getLSData('address');
    if(addressData) {
      return addressData;
    } else {
      return [];
    }
  }
}
