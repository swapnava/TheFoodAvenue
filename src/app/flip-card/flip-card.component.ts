import { Component, OnInit } from '@angular/core';
import { AuthenticationResponse } from '../Models/authentication-response';
import { Customer } from "../Models/customer"
import { Login } from '../Models/login';
import { LoginService } from '../Services/login.service';
import { SignupService } from '../Services/signup.service';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit {
  toggleProperty=false;
  admin=false;
  constructor(private loginService:LoginService, private signupService:SignupService, private router:Router, private adminService:AdminService) { }

  ngOnInit(): void {
    this.loginService.$loginEvent
    .subscribe(data =>  
      {
        if(this.admin === true && data.Status === "Success"){
          this.adminService.getAllCustomer();
          this.adminService.getAllItems();
          this.adminService.getAllOrders();
          this.adminService.getAllRestaurant();
          this.router.navigate(['/admin']);
        }
        else if(data.Status === "Success"){
          this.router.navigate(['/home']);
        }
        else{
          alert(data.Details);
        }
      });
    this.signupService.$signupEvent
    .subscribe(data =>
      {
        if(data.Status === "Success"){
          alert(data.Details);
        }
        else{
          alert(data.Details);
        }
      });
      
  }

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }

  title = 'Foodella';

  loginemailmessage ="Email ID";
  loginpasswordmessage ="Password";

  registercheck ="reg";

  authentication:AuthenticationResponse={
    Status:"",
    Details:""
  };

  authenticationreg:AuthenticationResponse = {
    Status:"",
    Details:""
  };

  customer:Customer = {
    fname:"",
    lname:"",
    gender:"Gender",
    email:"",
    mobile:"",
    address:{
      addressLine:"",
      country:"",
      city:"",
      state:"",
      pincode:""
    },
    password:"",
    confirmPassword:""
  };

  loginCred:Login = {
    email:"",
    password:""
  };
  
  passwordMessage:string="";

  signupvalidate(){
    if(this.customer.fname.length === 0 || this.customer.lname.length === 0 || this.customer.mobile.length === 0 || (this.customer.gender == "Gender" || this.customer.gender == "Gender must be selected")|| this.customer.email.length === 0 ||this.customer.password.length === 0){
      this.registercheck="regwarning";
      this.passwordMessage="Password Cannot be empty";
    }
    else if(this.customer.password != this.customer.confirmPassword){
      this.registercheck="regwarning";
      this.customer.password="";
      this.customer.confirmPassword="";
      this.passwordMessage="Mismatch in password Entry";
    }
    this.signupService.register(this.customer);
  }

  authenticate(){
    if(this.loginCred.email == ""){
      this.loginemailmessage = "Email-id cannot be empty";
    }
    else if(this.loginCred.password == ""){
      this.loginpasswordmessage= "Password cannot be empty";
    }
    else if(this.loginCred.email == "cginterndevteam@cg.com"){
      this.admin = true;
      this.loginService.auth(this.loginCred);
    }
    this.loginService.auth(this.loginCred);
  }
}
