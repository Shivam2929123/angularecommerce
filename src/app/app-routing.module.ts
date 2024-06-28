import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MenswearComponent } from './menswear/menswear.component';
import { WomenswearComponent } from './womenswear/womenswear.component';
import { ShoesComponent } from './shoes/shoes.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CardsComponent } from './cards/cards.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SellerComponent } from './seller/seller.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'body',
    component: BodyComponent
  },
  {
    path:'seller',
    component:SellerComponent
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'menswear',
    component: MenswearComponent
  },
  {
    path: 'womenswear',
    component: WomenswearComponent
  },
  {
    path: 'shoes',
    component: ShoesComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path:'',redirectTo:'cards',pathMatch:'full',},
    
    {

    path:'cards',
    component:CardsComponent
    
  },

  {
    path:'checkout',
    component:CheckoutComponent
  },
  {path:'product-details',
  component:ProductDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
