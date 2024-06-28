import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { cardChecklist, fullscreen } from 'ngx-bootstrap-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


 
  
  
  public totalItem:number=0;
  constructor(private cartService: CartService){}
  public searchTerm:string='';
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  ngOnInit():void{
    
    this.cartService.getProduct()
    .subscribe(res=>{
      this.totalItem= res.length;
    })
  
  }

}
