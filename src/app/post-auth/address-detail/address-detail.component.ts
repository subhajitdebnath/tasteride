import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/core/services/address.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.scss']
})
export class AddressDetailComponent {
  addressForm: FormGroup;
  formSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      street: ['', [Validators.required, Validators.required]],
      city: ['', [Validators.required, Validators.required]],
      postalCode: ['', [Validators.required, Validators.required]]

    });
  }
  onSubmit(form: FormGroup): void {
    console.log(form);
    this.formSubmitted = true;
    if(form.invalid){
      return;
    }
    let payload = {
      id: uuidv4(),
      street: form.value.street,
      city: form.value.city,
      postalCode: form.value.postalCode,
    }
    this.addressService.addAddress(payload);
    this.addressForm.reset();
    this.formSubmitted = false;
    this.router.navigate(['user', 'address']);
  }
}
