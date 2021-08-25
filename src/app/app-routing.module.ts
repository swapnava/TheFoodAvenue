import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'; 
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ItemsComponent } from './items/items.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path:"home", component:LandingPageComponent}, 
  { path:"editProfile", component: EditProfileComponent},
  { path:"myOrders", component: MyOrdersComponent},
  { path:"admin",component: AdminDashboardComponent},
  { path:"restaurant",component: RestaurantComponent},
  { path:"items", component: ItemsComponent},
  { path:"order", component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
