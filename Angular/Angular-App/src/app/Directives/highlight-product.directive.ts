import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightProduct]',
})
export class HighlightProductDirective {
  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.classList.add('border', 'border-light');
    // elemRef.nativeElement.style.border = '1px solid blue';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elemRef.nativeElement.classList.add('border', 'border-primary');
    this.elemRef.nativeElement.classList.remove('border', 'border-light');

    this.elemRef.nativeElement.children[2].children[0].style.transform =
      'scale(1.25)';
  }
  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.classList.add('border', 'border-light');
    this.elemRef.nativeElement.classList.remove('border', 'border-primary');

    this.elemRef.nativeElement.children[2].children[0].style.transform =
      'scale(1)';
  }
}
