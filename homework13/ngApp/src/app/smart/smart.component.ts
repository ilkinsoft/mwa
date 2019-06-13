import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  @Input() developers: any[]

  constructor() {
    this.developers = [
      { name: 'Ilkin', position: 'Full-Stack .NET Developer' },
      { name: 'Eren', position: 'Java Developer' },
      { name: 'Umur', position: 'Professor Assistant' },
      { name: 'Ali', position: 'Full-Stack Java Developer'}
    ]
  }

  ngOnInit() {
  }

}
