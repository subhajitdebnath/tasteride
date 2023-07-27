import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  editMode = false;
  existingAddress: any= {
    street: '',
    city: '',
    postalCode: ''
  };

  addressId: string;

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe( paramMap => {
      let addressId = paramMap.get('addressId');
      if(addressId) {
        this.addressId = addressId;
      }
    });
  }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      street: ['', [Validators.required, Validators.required]],
      city: ['', [Validators.required, Validators.required]],
      postalCode: ['', [Validators.required, Validators.required]]
    });
    // console.log(this.addressService.editMode);
    // this.editMode = this.addressService.editMode;
    // if (this.editMode){
    // this.existingAddress = this.addressService.editAddressDetail;
    // this.addressForm = this.fb.group({
    //   street: [this.existingAddress.street, Validators.required],
    //   city: [this.existingAddress.city, Validators.required],
    //   postalCode: [this.existingAddress.postalCode, Validators.required]
    // });
    // }
    if(this.addressId) {
      let address = this.addressService.getAddressDetailById(this.addressId);
      this.addressForm.patchValue({
        street: address.street,
        city: address.city,
        postalCode: address.postalCode
      })

      // this.addressForm.controls['city'].setValue('test')
    }

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
      submitType: this.addressId ? 'edit' : 'add',
      addressId: this.addressId
    }
    this.addressService.addAddress(payload);
    this.addressForm.reset();
    this.formSubmitted = false;
    this.router.navigate(['user', 'address']);
  }
}
