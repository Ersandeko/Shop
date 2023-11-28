import { AdminCartComponent } from './components/admin-cart/admin-cart.component';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';


@NgModule({
  declarations: [
    AdminCartComponent

  ],
  imports: [
    CommonModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class CartadminModule { }
