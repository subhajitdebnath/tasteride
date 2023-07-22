import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier'
})
export class MultiplierPipe implements PipeTransform {

  transform(value, multiply: number) {
    console.log(value)
    return value*multiply;
  }

}
