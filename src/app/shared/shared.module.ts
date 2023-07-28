import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplierPipe } from './pipes/multiplier.pipe';
import { FocusDirective } from './directives/focus.directive';



@NgModule({
  declarations: [
    MultiplierPipe,
    FocusDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultiplierPipe,
    FocusDirective
  ]
})
export class SharedModule { }
