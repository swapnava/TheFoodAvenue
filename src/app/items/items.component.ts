import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerUpdate } from '../Models/customerUpdate';
import { Item } from '../Models/item';
import { CurrentUserService } from '../Services/current-user.service';
import { ItemService } from '../Services/item.service';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  customerId:string="";
  restaurantId:string;
  restaurantName:string;
  Items:Array<Item>=[];
  count:number = 0;
  cartItem = new Map<string,number>([]); 
  itemCost = new Map<string,number>([]);
  billAmount:number=0;
  gst:number=0;
  totalBill:number=0;
  customer:CustomerUpdate = {
    customerId:0,
    firstName:"",
    lastName:"",
    gender:"",
    mobileNumber:"",
    address:{
      addressLine:"",
      country:"",
      city:"",
      state:"",
      pincode:""
    },
    email:"",
    wallet:""
  };
  isNull:boolean = true;

  constructor( private router:Router, private itemService:ItemService, private currentUser:CurrentUserService, private orderService:OrderService) {
    this.restaurantId=this.router.getCurrentNavigation()!.extras.state!.restaurantId;
    this.restaurantName = this.router.getCurrentNavigation()!.extras.state!.restaurantName;
    this.itemService.fetchItems(this.restaurantId);
    this.currentUser.getCurrentUser();
   }

  ngOnInit(): void {
    this.itemService.$itemsEvent.subscribe((data)=>{
      this.Items = data;
    });
    this.currentUser.$currentUser.subscribe((data)=>{
      this.customerId = data.customerId;
      this.customer = data;
      if(data.address.addressLine != null){
        this.isNull = false;
      }
      if(data.wallet != null){
        this.customer.wallet = data.wallet.balance;
      }
      else{
        this.customer.wallet = "";
      }
    })
  }

  addToCart(itemName:string, cost:number){
    this.count++;
    if(this.cartItem.has(itemName))
    {
      var qty:number = this.cartItem.get(itemName)!;
      this.cartItem.set(itemName,++qty);
      var c:number = this.Items.find(x=> x.itemName === itemName)!.cost;
      this.itemCost.set(itemName,c*qty);
      this.billAmount+=c;
    }
    else{
      this.cartItem.set(itemName,1);
      this.itemCost.set(itemName,cost);
      this.billAmount+=cost;
    }
    this.gst=0.05*this.billAmount;
    this.totalBill=this.billAmount+this.gst;
  }

  removeFromCart(itemName:string, cost:number){
    this.count--;
    var qty:number = this.cartItem.get(itemName)!;
      this.cartItem.set(itemName,--qty);
      var c:number = this.Items.find(x=> x.itemName === itemName)!.cost;
      this.itemCost.set(itemName,c*qty);
      this.billAmount-=c;
      this.gst=0.05*this.billAmount;
      this.totalBill=this.billAmount+this.gst;
  }

  placeOrder(){
    var v:number= +this.customer.wallet;
    if(!this.isNull){
      if(this.customer.address.addressLine == null || this.customer.address.city == "" || this.customer.address.pincode==""){
        alert("Cannot place order without address. Please add primary address in edit profile section.")
      }
      else if(v === 0 || v < this.totalBill){
        alert("Insufficient Balance! Add balance in wallet.")
      }
      else{
        this.currentUser.updateWallet((v-this.totalBill), this.customer);
        this.orderService.placeOrder(this.customerId, this.restaurantId, this.restaurantName, this.cartItem, this.totalBill);
        this.router.navigate(['/order']);
      }
    }
    else if(this.isNull){
      alert("Cannot place order without address. Please add primary address in edit profile section.");
    }
  }
}
