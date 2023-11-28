import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Product } from './models/product';
//import { AllProductComponent } from './components/all-product/all-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
//import { CartComponent } from './../carts/component/cart/cart.component';

import {  HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
   // AllProductComponent,
    ProductDetailsComponent
   // CartComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
    ],
    exports:[
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ProductsModule { }
