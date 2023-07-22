import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/core/services/address.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  address: any[]=[];
  constructor(
    private addressService: AddressService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.addressService.addressDetail);
    this.addressDetails();
  }
  addressDetails(): void {
    this.address = this.addressService.addressDetail;
  }
  deleteAddress(id: string):void{
    this.addressService.deleteAddress(id);
    this.address = this.addressService.addressDetail;
    console.log(this.address);
    this.router.navigate(['user/address']);
  }
  addAddress():void{
    this.router.navigate(['user/addressdetail']);
  }

  selectAddress(id: string): void {

  }

}
