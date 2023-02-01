import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[DarkMode]',
})
export class DarkModeDirective {
  // private elemRef: ElementRef;
  constructor(private elemRef: ElementRef) {
    // this.elemRef = elemRef;
    // elemRef.nativeElement.style.border = '1px solid red';
    this.elemRef.nativeElement.classList.add('border', 'border-dark');
    elemRef.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.elemRef.nativeElement.style.backgroundColor = 'black';
    // this.elemRef.nativeElement.style.color = 'white';
    this.elemRef.nativeElement.classList.add('table-dark');
    this.elemRef.nativeElement.classList.remove('table-light');
  }

  @HostListener('mouseout') onMouseOut() {
    // this.elemRef.nativeElement.style.backgroundColor = 'red';
    // this.elemRef.nativeElement.style.color = 'black';
    this.elemRef.nativeElement.classList.add('table-light');
    this.elemRef.nativeElement.classList.remove('table-dark');
  }
}
