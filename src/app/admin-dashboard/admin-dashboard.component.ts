import { Component, OnInit } from '@angular/core';
import { CustomerUpdate } from '../Models/customerUpdate';
import { Item } from '../Models/item';
import { ItemSelect } from '../Models/itemSelect';
import { Restaurant } from '../Models/restaurant';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  customers:any;
  restaurants:any;
  orders:any;
  items:any;
  item:Item={
    itemId:0,
    itemName:"",
    category:"",
    quantity:0,
    cost:0,
    img:""
  }

  itemListRes:Array<Item>=[];
  itemIndex:Array<ItemSelect>=[];
  restaurant:Restaurant={
  restaurantId:0,
	category:"",
	restaurantName:"",
	address:{
    addressLine:"",
    city:"",
    state:"",
    country:"",
    pincode:"",
  },
	itemList:[],
	managerName:"",
	contactNumber:"",
	customerIdList:[],
	orderIdList:[],
	img:""
}

  ngOnInit(): void {
    this.adminService.$customerEvent.subscribe((data)=>{
      this.customers = data;
    })
    this.adminService.$restaurantEvent.subscribe((data)=>{
      this.restaurants = data;
    })
    this.adminService.$orderEvent.subscribe((data)=>{
      this.orders = data;
    })
    this.adminService.$itemEvent.subscribe((data)=>{
      this.items = data;
      this.itemListRes = data;
      var count:number=0;
    for(let i of this.itemListRes){
      let itemInd=new ItemSelect();
      itemInd.id=i.itemId;
      itemInd.isSelected=false;
      this.itemIndex.push(itemInd);
      count++;
      if(count==this.itemListRes.length){
        break;
      }
    }
    })
    
    console.log(this.itemIndex);
  }

  addItem(){
    this.adminService.addItem(this.item);
  }

  deleteItem(itemId:number){
    this.adminService.deleteItem(itemId);
  }

  changed(){
    console.log(this.itemIndex);
  }

  addRestaurant(){
    for(let i=0;i<this.itemIndex.length;i++){
      if(this.itemIndex[i].isSelected){
        this.restaurant.itemList.push(this.itemListRes[i]);
        console.log(this.itemListRes[i]);
      }
    }
    this.adminService.addRestaurant(this.restaurant);
  }

  deleteRestaurant(id:number){
    this.adminService.deleteRestaurant(id);
  }

  updateRestaurant(){}
}
