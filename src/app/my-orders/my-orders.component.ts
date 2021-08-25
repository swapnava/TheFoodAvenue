import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { OrderPage } from '../Models/OrderPage';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MyOrdersComponent implements OnInit {
  currentRate: number = 0;
  CustomerId?:any;
  orders:Array<OrderPage>=[];
  constructor(private orderService:OrderService,private router:Router) {
    this.CustomerId=this.router.getCurrentNavigation()!.extras.state!.customerId;
    this.orderService.getOrderList(this.CustomerId);
    this.orderService.$orderEvent.subscribe((data)=>{
      console.log(data);
      this.orders = data;
      console.log(this.orders);
    }
    )}
  ngOnInit(): void {
}
}
