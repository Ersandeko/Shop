import { AdminCartComponent } from './../admin/components/admin-cart/admin-cart.component';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
//import { CartComponent } from './component/cart/cart.component';


@NgModule({
  declarations: [
  //  CartComponent,

  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class CartsModule { }
