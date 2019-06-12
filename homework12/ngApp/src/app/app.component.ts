import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <app-counter [counter]="counterValue" (counterChange)="change($event)"></app-counter>

  <p>
  Component Counter Value = {{componentCounterValue}}
  </p>
  `
})
export class AppComponent {
  title = 'ngApp';
  componentCounterValue: number = 0;

  change(e) {
    console.log(e)
    this.componentCounterValue = e; 
  }
}
