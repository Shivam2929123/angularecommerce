import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public products: any = [];
  public grandTotal !: number;
  public productList: any;
  constructor(private api: ApiService, private cartService: CartService) { }
  ngOnInit(): void {
    this.api.getProduct();
    this.cartService.getProduct().subscribe(res => {
      console.log(res)
      this.grandTotal = this.cartService.getTotalPrice();
      this.products = res;
      this.productList=res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{ quantity:1, total: a.price });

      });
    })


  }
  addtoCart(item: any) {
    this.cartService.addtoCart(item);
    console.log(item)
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
  
 

}




