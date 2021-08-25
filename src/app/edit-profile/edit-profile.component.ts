import { Component, EventEmitter, OnInit } from '@angular/core';
import { CustomerUpdate } from '../Models/customerUpdate';
import { CurrentUserService } from '../Services/current-user.service';
import { EditProfileService } from '../Services/edit-profile.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
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

  amount:string="";
  constructor(private editProfile:EditProfileService, private loginService:LoginService, private currentUser:CurrentUserService) { 
    this.currentUser.$currentUser.subscribe((data)=>{
      this.userId = data.customerId;
      this.customer.customerId = data.customerId;
      this.customer.email = data.email;
      this.customer.firstName=data.firstName;
      this.customer.lastName = data.lastName;
      this.customer.address.addressLine = data.address.addressLine;
      this.customer.mobileNumber = data.mobileNumber;
      this.customer.wallet = data.wallet.balance;
    })
  }

  userId:string="";

  

  ngOnInit(): void {
    this.editProfile.$editUserEvent.subscribe((data)=>{
      if(data.customerId!=null){
        alert("Profile Updated Successfully");
      }
      else{
        alert("Invalid Data");
      }
    });
  }

  updateUser(){
    if(this.customer.address.addressLine == "" || this.customer.address.city=="" || this.customer.address.country=="" || this.customer.address.pincode=="" || this.customer.address.state==""){
      alert("Profile fields cannot be empty during submission.");
    }
    else if(this.customer.mobileNumber.length != 10){
      alert("Mobile number has to be of 10 digits");
    }
    else{
    this.editProfile.updateUser(this.customer,this.userId);
    }
  }
  
  updateWallet(){
    var amt:number = +this.amount;
    var x:number = +this.customer.wallet;
    if(amt<0){
      alert("Balance cannot be negative");
    }
    else{
      var balance = amt+x;
      this.currentUser.updateWallet(balance,this.customer);
    }
  }
  getCurrentUser(){
      this.currentUser.getCurrentUser();
  }
}
