export interface OrderPage{
orderId: number;
 customerId:string;
 restaurantName:string;
 orderDate:string;
 itemList:Array<String>;
 orderStatus:string;
 totalAmount:number;
}