import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthIndependentRoutingModule } from './auth-independent-routing.module';
import { AuthIndependentComponent } from './auth-independent.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    AuthIndependentComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    AuthIndependentRoutingModule,
    LayoutModule
  ]
})
export class AuthIndependentModule { }
