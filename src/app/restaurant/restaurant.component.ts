import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../Models/restaurant';
import { RestaurantService } from '../Services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants:Array<Restaurant> = [];

  private category:string;
  
  constructor(private router:Router, private restaurantService:RestaurantService) {
    this.category = this.router.getCurrentNavigation()!.extras.state!.category;
   }

  ngOnInit(): void {
    this.restaurantService.loadRestaurants(this.category);
    this.restaurantService.$restaurantEvent.subscribe((data)=>{
      this.restaurants = data;
    })
  }
  showItems(id:number, name:string){
    this.router.navigate(['/items'],{state:{restaurantId:id,restaurantName:name}});
  }  
}
