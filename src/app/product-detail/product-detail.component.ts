import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,private http: HttpClient,private cartService :CartService
  ) {}

  ngOnInit(): void {
    const productId = (this.route.snapshot.paramMap.get('id')!);

    this.api.getProductById(productId).subscribe({
      next: (res) => {
        this.product = res;
        this.loading = false;
      },
      error: (_) => {
        this.error = true;
        this.loading = false;
      }
    });
  }
  currentIndex = 0;

next() {
  if (this.currentIndex < this.product.images.length - 1) {
    this.currentIndex++;
  } else {
    this.currentIndex = 0; // loop
  }
}

prev() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  } else {
    this.currentIndex = this.product.images.length - 1; // loop
  }
}
addtoCart(item:any){
  this.cartService.addtoCart(item);

}
}
