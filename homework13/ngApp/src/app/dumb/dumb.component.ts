import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent implements OnInit {

  @Input() data: any[];

  constructor() { }

  ngOnInit() {
  }

}
