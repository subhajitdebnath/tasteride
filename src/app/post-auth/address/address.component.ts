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
  onSubmit(form: FormGroup): void {
    console.log(form);
    this.formSubmitted = true;
    this.street = form.value.street;
    this.postalCode = form.value.postalCode;
    this.city = form.value.city;
    if(this.street===''||this.city===''||this.postalCode===''){
      return;
    }
    this.address[0] = {};
    this.address[0].street = this.street;
    this.address[0].city = this.city;
    this.address[0].postalCode = this.postalCode;
    this.addToAddress()
    console.log(form.value, form.valid);
    this.addressForm.reset();
  }
  addToAddress(): void {
    let addressPayload = this.address;
    
    this.addressService.addAddress(addressPayload);
  }
  deleteAddress():void{
    this.addressService.deleteAddress();
    this.address = [];
    console.log(this.address);
    this.router.navigate(['user/address']);
  }

}
