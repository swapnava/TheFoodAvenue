import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { CustomerUpdate } from '../Models/customerUpdate';
import { EditProfileService } from './edit-profile.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor(private httpClient:HttpClient,private editProfile:EditProfileService) { }
  private url="http://localhost:8786/auth/gcu";
  $walletEvent=new EventEmitter();
  $currentUser=new EventEmitter();
  getCurrentUser(){
    this.httpClient.get(this.url).toPromise().then((data:any)=>{this.$currentUser.emit(data)});
  }
  updateWallet(amount:number, customer:CustomerUpdate){
      var balance:string = amount.toString();
      customer.wallet = balance;
      this.editProfile.updateUser(customer,customer.customerId.toString());
      this.$walletEvent.emit(balance);
    }
  }
