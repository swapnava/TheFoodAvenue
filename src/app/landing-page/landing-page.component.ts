import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { CurrentUserService } from '../Services/current-user.service';
import { RestaurantService } from '../Services/restaurant.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class LandingPageComponent implements OnInit {
  profileClicked:boolean = false;
  private CustomerId:number = 0;

  constructor(private router:Router, private restaurantService:RestaurantService, private currentUser:CurrentUserService) {
    this.currentUser.getCurrentUser();
    this.currentUser.$currentUser.subscribe((data)=>{
      this.CustomerId=data.customerId;
      console.log(this.CustomerId);
    })
   }
  

  ngOnInit(): void {
    
  }

  profileToggle(){
    this.profileClicked = !this.profileClicked;
  }
  
  myOrder(){
    this.router.navigate(['/myOrders'],{state:{customerId:(this.CustomerId.toString())}})
  }

  myProfile(){
    this.router.navigate(['/editProfile'])
      .then(()=>{
        window.location.reload();
      })
  }

  logout(){
    this.router.navigate(['/'])
      .then(()=>{
        window.location.reload();
      })
  }
  restaurantindian(){
    this.router.navigate(['/restaurant'],{state:{category:"Indian"}});
  }
  restaurantitalian(){
    this.router.navigate(['/restaurant'],{state:{category:"Italian"}});
  }
  restaurantchinese(){
    this.router.navigate(['/restaurant'],{state:{category:"Chinese"}});
  }
}
