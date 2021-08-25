import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { CustomerUpdate } from '../Models/customerUpdate';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  private apiUrl  = "http://localhost:8786/fdsdata/customer/update/";
  constructor(private http:HttpClient) { }

  $editUserEvent = new EventEmitter();

  updateUser(registration:CustomerUpdate, userId:string){
    const url:string=this.apiUrl.concat(userId);
    const body:string = JSON.parse('{\n"customerId":"'+userId+'",\n"firstName":"'+registration.firstName+'",\n"lastName":"'+registration.lastName+'",\n"gender":"'+registration.gender+
    '",\n"mobileNumber":"'+registration.mobileNumber+'",\n"address": {\n"addressLine":"'+registration.address.addressLine+'",\n"city":"'+registration.address.city+'",\n"state":"'+registration.address.state
    +'",\n"country":"'+registration.address.country+'",\n"pincode":"'+registration.address.pincode+'"\n},\n"email":"'+registration.email+'",\n"wallet":{\n"balance":"'+registration.wallet+
    '"\n}\n}');
    console.log(url);
    this.http.post(url,body).toPromise().then((data:any) => {
      this.$editUserEvent.emit(data);
    });
  }
}
