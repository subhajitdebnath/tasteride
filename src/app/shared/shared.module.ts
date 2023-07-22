import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplierPipe } from './pipes/multiplier.pipe';



@NgModule({
  declarations: [
    MultiplierPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultiplierPipe
  ]
})
export class SharedModule { }
