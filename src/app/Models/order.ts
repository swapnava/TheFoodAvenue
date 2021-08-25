export class Order{
private orderId!: number;
private customerId!:string;
private restaurantName!:string;
private orderDate!:string;
private itemList!:Array<String>;
private orderStatus!:string;
private totalAmount!:number;

public get OrderId(){
    return this.orderId;
}
public set OrderId(orderId : number) {
    this.orderId = orderId;
}
public get CustomerId(){
    return this.customerId;
}
public set CustomerId(customerId : string) {
    this.customerId = customerId;
}
public get RestaurantName(){
    return this.restaurantName;
}
public set RestaurantName(restaurantName : string) {
    this.restaurantName = restaurantName;
}
public get OrderDate(){
    return this.orderDate;
}
public set OrderDate(orderDate : string) {
    this.orderDate = orderDate;
}
public get ItemList(){
    return this.itemList;
}
public set ItemList(itemList : Array<String>) {
    this.itemList = itemList;
}
public get OrderStatus(){
    return this.orderStatus;
}
public set OrderStatus(orderStatus : string) {
    this.orderStatus = orderStatus;
}
public get TotalAmount(){
    return this.totalAmount;
}
public set TotalAmount(totalAmount:number){
    this.totalAmount=totalAmount;
}
}