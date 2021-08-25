import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Customer } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl  = "http://localhost:8786/auth/signup";
  constructor(private http:HttpClient) { }

  $signupEvent = new EventEmitter();

  register(registration:Customer){
    const body:string = JSON.parse('{\n"username":"'+registration.email+'",\n"password":"'+registration.password+
    '",\n"firstName":"'+registration.fname+'",\n"lastName":"'+registration.lname+'",\n"gender":"'+registration.gender+
    '",\n"mobile":"'+registration.mobile+'"\n}');
    this.http.post(this.apiUrl,body).toPromise().then((data:any) => {
      this.$signupEvent.emit(data);
    });
  }
}
