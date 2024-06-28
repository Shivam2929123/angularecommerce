import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  

  @Input() showHeader :any;
  public productList:any;
  searchKey:string="";
    constructor(private api:ApiService,private cartService:CartService){};

  
  ngOnInit(): void {
    
    console.log(this.showHeader);
    this.api.getProduct()
    
    .subscribe((res: object)=>{
      this.productList=res;
      console.log(res)
      
      });
      this.cartService.search.subscribe((val:any)=>{
        this.searchKey=val;
      })
      
    
  
  
  }
  addtoCart(item:any){
    this.cartService.addtoCart(item);
    

  }
 
}










