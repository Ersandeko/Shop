import { AppRoutingModule } from './app-routing.module';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AllProductComponent } from './products/components/all-product/all-product.component';
import { CartComponent } from './carts/component/cart/cart.component';
import { ProductComponent } from './products/components/product/product.component';


import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ShardModule } from './shard/shard.module';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact/contact/contact.component';
import { AdminCartComponent } from './admin/components/admin-cart/admin-cart.component';




@NgModule({
  declarations: [
    AppComponent,
    AllProductComponent,
    ContactComponent,
    ProductComponent,
    CartComponent,
    AdminCartComponent,
  ],
  imports: [

    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    ShardModule,
    AppRoutingModule,
    HttpClientModule

    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
