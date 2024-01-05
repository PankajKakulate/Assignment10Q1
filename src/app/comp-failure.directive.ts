import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  constructor(private obj:ElementRef) { }
  @HostListener('mouseenter') onmouseenter(){
    //this.obj.nativeElement.style.background='red';
    this.obj.nativeElement.setAttribute('style', 'color: red; background: white');
    
  }

  @HostListener('mouseleave') onmouseleave(){
    this.obj.nativeElement.setAttribute('style', 'color: black; background: white');
    
  }
}
