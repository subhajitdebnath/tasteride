import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/core/services/address.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.scss']
})
export class AddressDetailComponent {
  addressForm: FormGroup;
  address: any[]=[];
  payloadAddress: any[]=[];
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
  onSubmit(form: FormGroup): void {
    console.log(form);
    this.formSubmitted = true;
    this.street = form.value.street;
    this.postalCode = form.value.postalCode;
    this.city = form.value.city;
    if(this.street===''||this.city===''||this.postalCode===''){
      return;
    }
    this.payloadAddress[0] = {};
    this.payloadAddress[0].street = this.street;
    this.payloadAddress[0].city = this.city;
    this.payloadAddress[0].postalCode = this.postalCode;
    this.addToAddress()
    console.log(form.value, form.valid);
    this.addressForm.reset();
  }
  addToAddress(): void {
    let addressPayload = this.payloadAddress[0];
    console.log(addressPayload);
    this.addressService.addAddress(addressPayload);
  }
  deleteAddress(street: string):void{
    this.addressService.deleteAddress(street);
    this.address = [];
    console.log(this.address);
    this.router.navigate(['user/address']);
  }


}
