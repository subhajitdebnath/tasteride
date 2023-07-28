import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  @Input() bgColor: string = '';
  // bgColor = 'green';

  constructor(
    private el: ElementRef
  ) {
    // console.log(this.bgColor)
  }

  ngOnInit() {
    console.log(this.bgColor)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.background = this.bgColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.background = "";
  }

}
