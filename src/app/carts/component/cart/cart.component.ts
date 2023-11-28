import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProduct : any = [];
  constructor(private service:CartsService) { }
total: any = 0;
  ngOnInit(): void {
    this.getCartProduct()
  }

  getCartProduct(){
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
   }
   this.getCardTotal();

}

getCardTotal(){
  this.total = 0;
  for(let x in this.cartProduct){
    this.total += this.cartProduct[x].item.price * this.cartProduct[x].quantity
  }
}

minAmount(index:number){
  this.cartProduct[index].quantity--;
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  this.getCardTotal();

}

AddAmount(index:number){
  this.cartProduct[index].quantity++;
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  this.getCardTotal();
}


detectChange(){
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  this.getCardTotal();
}



deleteProduct(index:number){
  this.cartProduct.splice(index, 1)
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  this.getCardTotal();

}

clearCart(){
  this.cartProduct.splice(0)
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  this.getCardTotal();
}

success:boolean =false
addCart(){
  let products = this.cartProduct.map((item: { item: { id: any; }; quantity: any; }) =>{
    return {productId:item.item.id, quantity: item.quantity}
  })
  let Model = {
    userId: 5,
    date : new Date(),
    products : products
  }
this.service.createNewCart(Model).subscribe(res =>{
  this.success= true;
})

}

}

