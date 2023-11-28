import { ContactComponent } from './contact/contact/contact.component';
import { CartComponent } from './carts/component/cart/cart.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { AllProductComponent } from './products/components/all-product/all-product.component';
import { AdminCartComponent } from './admin/components/admin-cart/admin-cart.component';


import { CommonModule } from "@angular/common";

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"products", component:AllProductComponent},
  {path:"details/:id", component:ProductDetailsComponent},
  {path:"carts", component:CartComponent},
  {path:"contact", component:ContactComponent},
  {path:"adminCart", component:AdminCartComponent},

  {path: '**', redirectTo: '/products', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
