import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Models/order';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:any = null;
  constructor(private router:Router, private orderService:OrderService) { 
    
   }
  ngOnInit(): void {
    this.orderService.$placeOrder.subscribe((data)=>{
      this.order = data;
    })
   }

   back(){
     this.router.navigate(['/home']).then(()=>{
     window.location.reload();
    })
    }
   }
