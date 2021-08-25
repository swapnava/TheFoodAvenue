import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  $itemsEvent = new EventEmitter();

  constructor(private http:HttpClient) {  }
  apiUrl:string='http://localhost:8786/fdsdata/restaurant/items/'
  fetchItems(restaurantId:string){
    this.http.get<Item>(this.apiUrl+restaurantId).toPromise().then((data:Item)=>{
      this.$itemsEvent.emit(data);
    })
  }
}
