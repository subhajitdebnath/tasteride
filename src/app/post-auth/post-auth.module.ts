import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { PostAuthComponent } from './post-auth.component';
import { CartComponent } from './cart/cart.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    PostAuthComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    PostAuthRoutingModule,
    LayoutModule
  ]
})
export class PostAuthModule { }
