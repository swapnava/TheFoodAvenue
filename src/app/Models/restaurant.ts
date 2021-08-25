import { Address } from "./address";
import { Item } from "./item";

export interface Restaurant{
    restaurantId:number;
	category:string;
	restaurantName:string;
	address:Address;
	itemList:Array<Item>;
	managerName:string;
	contactNumber:string;
	customerIdList:Array<string>;
	orderIdList:Array<string>;
	img:string;
}