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
   }
   addAddress(payload): void {
    console.log(payload);
    
    this.addressDetail = payload;
    
    this.changeAddress();
    this.lsService.setLSData('address', this.addressDetail);
  }
  deleteAddress(): void{
    this.changeAddress();
    this.lsService.removeLSData('address');
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
