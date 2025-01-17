import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public search= new BehaviorSubject<string>("");

  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  constructor(){}

  getProduct(){
    return this.productList.asObservable();

  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.Total;
    })
    return grandTotal;

  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if (product._id=== a._id){
        this.cartItemList.splice(index,1);
      }

    })
    this.productList.next(this.cartItemList);
    
  }
  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
 
  itemQuantity(){

  }
}
