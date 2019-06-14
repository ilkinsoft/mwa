import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';

  constructor(private dataService: DataServiceService) {
    dataService.getOnlineData('https://randomuser.me/api/?results=10').subscribe(
      data => localStorage.setItem('users', JSON.stringify(data))
    )

  }
}
