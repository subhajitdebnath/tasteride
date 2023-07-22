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
  addressForm: FormGroup;
  address: any[]=[];
  formSubmitted = false;
  street: string;
  postalCode: string;
  city: string;
  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
    private lsService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      street: ['', [Validators.required, Validators.required]],
      city: ['', [Validators.required, Validators.required]],
      postalCode: ['', [Validators.required, Validators.required]]

    });
    console.log(this.addressService.addressDetail);
    this.address = this.addressService.getAddress();
    if (this.address===null){
      this.address = [];
    }
    this.addressDetails();
  }
  addressDetails(): void {
    this.address = this.addressService.getAddress();
    if (this.address===null){
      this.address = [];
    }

  }
  deleteAddress(street: string):void{
    this.addressService.deleteAddress(street);
    this.address = this.addressService.addressDetail;
    console.log(this.address);
    this.router.navigate(['user/address']);
  }
  addAddress():void{
    this.router.navigate(['user/addressdetail']);
  }

}