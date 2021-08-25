import { Address } from "./address";

export interface Customer {
    fname:string;
    lname:string;
    gender:string;
    mobile:string;
    address:Address;
    email:string;
    password:string;
    confirmPassword?:string;
}
