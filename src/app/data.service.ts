import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  getOne() {
    return this.http.get('https://api.covidindiatracker.com/state_data.json');
       
        
      
    }
}