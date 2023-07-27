import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  addressDetail: any[]=[];
  editAddressDetail: any[]=[];
  editMode = false;
  id: string; 

  constructor(
    private lsService: LocalStorageService,
    private router: Router
  ) {
    this.addressDetail = this.getAddress();
  }
  
  addAddress(payload): void {
    if(payload.submitType === 'edit') {
      let addressIndex = this.addressDetail.findIndex(item => item.id === payload.addressId);
      this.addressDetail[addressIndex] = payload;
    } else {
      this.addressDetail.push(payload);
    }
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

  getAddressDetailById(id: string) {
    return this.addressDetail.find(item => item.id === id);
  }

  // editAddress(id: string): any {
  //   console.log(id)
  //   // return;
  //   let address = this.addressDetail.find(item => item.id === id);
  //   if(address != null) {
  //     console.log(address);
  //     this.editAddressDetail =address;
  //     this.id = id;
  //     this.router.navigate(['user/addressdetail']);
  //   }
  // }
  getAddress(): any[]{
    let addressData = this.lsService.getLSData('address');
    if(addressData) {
      return addressData;
    } else {
      return [];
    }
  }
}
