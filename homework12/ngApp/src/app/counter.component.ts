import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      <button (click)="decrease()">-</button>
      {{counterValue}}
      <button (click)="increase()">+</button>
    </p>
    <p>
    Component Counter Value = {{componentCounterValue}}
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  counterValue: number;
  @Input() counter;
  @Output() counterChange;
  componentCounterValue: number;

  constructor() {
    this.counterValue = 0;
    this.counterChange = new EventEmitter();
  }

  increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
  decrease(){
    this.counterValue--;
  }



  ngOnInit() {
  }

}
