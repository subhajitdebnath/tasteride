import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { PostAuthComponent } from './post-auth.component';
import { CartComponent } from './cart/cart.component';
import { LayoutModule } from '../layout/layout.module';
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressDetailComponent } from './address-detail/address-detail.component';


@NgModule({
  declarations: [
    PostAuthComponent,
    CartComponent,
    AddressComponent,
    AddressDetailComponent
  ],
  imports: [
    CommonModule,
    PostAuthRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class PostAuthModule { }
