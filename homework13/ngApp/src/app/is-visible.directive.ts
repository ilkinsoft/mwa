import { Directive, Input, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective {

  @Input('isVisible') incomeValue: boolean;
  @HostBinding('style.display') visible: string;

  ngOnInit() {
    this.visible = this.incomeValue == true ? 'block' : 'none';
  }
  
  constructor(private e: ElementRef, private r: Renderer2) {

    r.setStyle(e.nativeElement, 'display', this.visible);
  }

}
