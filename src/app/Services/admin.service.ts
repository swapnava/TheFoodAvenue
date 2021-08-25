import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Item } from '../Models/item';
import { Restaurant } from '../Models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:8786/fdsdata/';

  $customerEvent = new EventEmitter();
  $orderEvent = new EventEmitter();
  $itemEvent = new EventEmitter();
  $restaurantEvent = new EventEmitter();

  getAllCustomer(){
    this.http.get(this.apiUrl+"customer/show").toPromise().then((data:any)=>
      {
        this.$customerEvent.emit(data);
      })
  }
  getAllOrders(){
    this.http.get(this.apiUrl+"order/show").toPromise().then((data:any)=>
      {
        this.$orderEvent.emit(data);
      })
  }
  getAllRestaurant(){
    this.http.get(this.apiUrl+"restaurant/all").toPromise().then((data:any)=>
      {
        this.$restaurantEvent.emit(data);
      })
  }

  addRestaurant(restaurant:Restaurant){
    this.http.post(this.apiUrl+"restaurant/add",restaurant).toPromise().then((data:any)=>{
      this.getAllRestaurant();
    })
  }
  
  deleteRestaurant(id:number){
    this.http.delete(this.apiUrl+"restaurant/remove/"+id).toPromise().then((data:any)=>{
      this.$restaurantEvent.emit(data);
    })
  }
  getAllItems(){
    this.http.get(this.apiUrl+"item/getallitems").toPromise().then((data:any)=>
      {
        this.$itemEvent.emit(data);
      })
  }
  addItem(item:Item){
    this.http.post(this.apiUrl+"item/add",item).toPromise().then((data:any)=>
    {
      this.getAllItems();
    })
  }
  deleteItem(itemid:number){
    this.http.delete(this.apiUrl+"item/delete/"+itemid).toPromise().then((data:any)=>{
      this.$itemEvent.emit(data);
    })
  }
}

