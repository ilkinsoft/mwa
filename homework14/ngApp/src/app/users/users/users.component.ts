import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input('users') users = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getCachedData();
    if (this.users === null) {
      setTimeout(() => {
        this.users = this.dataService.getCachedData();
      }, 1000);
    }
  }

}
