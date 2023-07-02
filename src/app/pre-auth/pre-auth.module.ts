import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { PreAuthComponent } from './pre-auth.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    PreAuthComponent,
    SingInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    PreAuthRoutingModule
  ]
})
export class PreAuthModule { }
