import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective {

  constructor(
    private elemento:ElementRef,
    private renderer:Renderer2
  ) {
    elemento.nativeElement.style.fontSize = '20px';
  }

}
