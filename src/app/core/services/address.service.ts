import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  addressDetail: any[]=[];

  address = new BehaviorSubject(this.addressDetail);

  constructor(private lsService: LocalStorageService) 
  {
    let add = this.lsService.getLSData('address');
    console.log(add);
    if(add) {
      this.addressDetail = add;
      this.changeAddress();
    }
    else{
      this.addressDetail = [];
    }
   }
   addAddress(payload): void {
    console.log(payload);
    //this.addressDetail = payload;
    if(this.addressDetail === null){
      this.addressDetail = [];
    }
    this.addressDetail.push(payload);
    this.changeAddress();
    this.lsService.setLSData('address', this.addressDetail);
  }
  deleteAddress(street: string): void{

      console.log(street)
      /** checking if the product exists */
      let addressIndex = this.addressDetail.findIndex(item => item.street === street);
      if(addressIndex >= 0) {
        /** checking for address */
          console.log(addressIndex);
          this.addressDetail.splice(addressIndex, 1);
          console.log(this.addressDetail);
        }
        this.changeAddress();
        this.lsService.setLSData('address', this.addressDetail);
  
    //this.changeAddress();
    //this.lsService.removeLSData('address');
  }
  getAddress(): any[]{
    this.changeAddress();
    this.addressDetail = this.lsService.getLSData('address');
    return(this.addressDetail);
  }
  changeAddress(): void {
    this.address.next(this.addressDetail);
  }
}
