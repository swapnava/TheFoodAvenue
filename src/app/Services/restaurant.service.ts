import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Restaurant } from '../Models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  $restaurantEvent = new EventEmitter();
  private apiurl = 'http://localhost:8786/fdsdata/restaurant/showByCategory/';
  loadRestaurants(category:string){
      this.http.get<Restaurant>(this.apiurl+category).toPromise().then((data:Restaurant)=>{
        this.$restaurantEvent.emit(data);
      })
  }
}
