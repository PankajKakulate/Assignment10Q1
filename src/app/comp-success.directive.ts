import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

  constructor(private obj:ElementRef) { }
  @HostListener('mouseenter') onmouseenter(){
    this.obj.nativeElement.setAttribute('style', 'color: green; background: white');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.obj.nativeElement.setAttribute('style', 'color: black; background: white');
    
  }
}
