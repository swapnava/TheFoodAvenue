import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Order } from '../Models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl  = "http://localhost:8786/fdsdata/order/";
  constructor(private http:HttpClient) { }

  $orderEvent = new EventEmitter();
  $placeOrder = new EventEmitter();
  

  getOrderList(customerId:number){
    this.apiUrl=this.apiUrl+"getByCustomerId/"+customerId;
    this.http.get(this.apiUrl).toPromise().then((data:any) => {
      this.$orderEvent.emit(data);
      console.log(customerId);
      console.log(data)
    });
  }

  placeOrder(customerId:string, restaurantId:string, restaurantName:string, itemList:Map<string,number>, totalBill:number){
    this.apiUrl=this.apiUrl+"add/"+restaurantId;
    let order = new Order();
    order.CustomerId = customerId;
    order.RestaurantName = restaurantName;
    let orderDate = new Date();
    order.OrderDate = orderDate.toString();
    var orderStatus = ['Order Placed', 'Delivered', 'On the way'];
    var status = orderStatus[Math.floor(Math.random() * orderStatus.length)];
    order.OrderStatus = status;
    order.TotalAmount = totalBill;
    order.ItemList=[];
    for(let key of itemList.keys()){
      order.ItemList.push((key+":         "+itemList.get(key)).toString());
    }
    this.http.post<Order>(this.apiUrl,JSON.parse(JSON.stringify(order))).toPromise().then((data:Order)=>{
      this.$placeOrder.emit(data);
    })
  }
}
