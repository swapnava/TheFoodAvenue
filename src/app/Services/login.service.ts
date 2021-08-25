import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../Models/login';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl  = "http://localhost:8786/auth/login";
  constructor(private http:HttpClient) { }

  $loginEvent = new EventEmitter();

  auth(loginCred:Login){
    const body:string = JSON.parse('{\n"username":"'+loginCred.email+'",\n"password":"'+loginCred.password+'"\n}');
    this.http.post(this.apiUrl,body).toPromise().then((data:any) => {
      this.$loginEvent.emit(data);
    });
  }
  
}

