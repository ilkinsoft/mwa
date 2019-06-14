import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {

  currentSize: number;

  @HostListener('dblclick') onDoubleClick(){
    this.currentSize += 2;
    this.e.nativeElement.style.fontSize = this.currentSize + 'px';
  }

  constructor(private e: ElementRef, private r2: Renderer2) {
    this.currentSize = 20;
    this.e.nativeElement.style.fontSize = this.currentSize + 'px';
  }

}
