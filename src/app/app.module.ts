import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { CartComponent } from './cart/cart.component';
import { CardsComponent } from './cards/cards.component';
import { SellerComponent } from './seller/seller.component';
import { MenswearComponent } from './menswear/menswear.component';
import { WomenswearComponent } from './womenswear/womenswear.component';
import { ShoesComponent } from './shoes/shoes.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { allIcons } from 'ngx-bootstrap-icons';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    BodyComponent,
    FooterComponent,
    HomeCarouselComponent,
    CartComponent,
    CardsComponent,
    SellerComponent,
    MenswearComponent,
    WomenswearComponent,
    ShoesComponent,
    LoginComponent,
    FilterPipe,
    CheckoutComponent,
    ProductDetailsComponent,
    ProductDetailComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FormsModule,
    ReactiveFormsModule,

    
    


   
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
