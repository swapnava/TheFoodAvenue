import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebappTitleComponent } from './webapp-title/webapp-title.component';
import { BackgroundComponent } from './background/background.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FlipCardModule } from './flip-card/flip-card.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './Services/login.service';
import { SignupService } from './Services/signup.service';
import { OrderService } from './Services/order.service';
import { EditProfileService } from './Services/edit-profile.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { CurrentUserService } from './Services/current-user.service';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantService } from './Services/restaurant.service';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './Services/item.service';
import { OrderComponent } from './order/order.component';
import { AdminService } from './Services/admin.service';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

@NgModule({
  
  declarations: [
    AppComponent,
    WebappTitleComponent,
    BackgroundComponent,
    FlipCardComponent,
    MyOrdersComponent,
    EditProfileComponent,
    AdminDashboardComponent,
    LandingPageComponent,
    LoginComponent,
    RestaurantComponent,
    ItemsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlipCardModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    BackButtonDisableModule.forRoot()
  ],
  providers: [
    AdminService,
    LoginService,
    SignupService,
    OrderService,
    EditProfileService,
    CurrentUserService,
    RestaurantService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
