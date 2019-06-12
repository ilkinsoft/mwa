import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      <button (click)="decrease()">-</button>
      {{counterValue}}
      <button (click)="increase()">+</button>
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  counterValue: number = 0 ;
  @Input() counter;
  @Output() counterChange = new EventEmitter();

  constructor() {

  }

  increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  decrease(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
    return false; 
  }

  ngOnInit() {
  }
}
