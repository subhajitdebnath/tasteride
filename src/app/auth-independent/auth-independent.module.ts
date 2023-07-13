import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthIndependentRoutingModule } from './auth-independent-routing.module';
import { AuthIndependentComponent } from './auth-independent.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutModule } from '../layout/layout.module';
import { SearchComponent } from './search/search.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthIndependentComponent,
    HomeComponent,
    ProductDetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    AuthIndependentRoutingModule,
    LayoutModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthIndependentModule { }
