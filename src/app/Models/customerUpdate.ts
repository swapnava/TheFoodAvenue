import { Address } from "./address";

export interface CustomerUpdate{
    customerId:number;
	firstName:string;
    lastName:string;
	gender:string;
	mobileNumber:string;
	address:Address;
	email:string;
    wallet:string;
}