import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  getOnlineData(url: string) {
    return this.http.get(url)
  }

  getCachedData(): any[] | null {
    const users = localStorage.getItem('users');
    if (users !== null)
      return JSON.parse(users);

    return null;
  }
}
