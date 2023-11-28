import { Product } from './../../../products/models/product';
import { AdminCartsService } from './../../sevices/admin-carts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.css']
})
export class AdminCartComponent implements OnInit {

constructor(private api:AdminCartsService,
private build:FormBuilder) { }


cart:any [] = [];
form!:FormGroup;
ngOnInit(): void {
  this.form = this.build.group({
    start: [''],
    end: ['']
  })
  this.getCart();
}

getCart(){
  this.api.getAllCarts()
  .subscribe((res:any)=>{
    this.cart= res;
  }, error=>{
    console.error(error.status)
    if(error.status===404){
      alert(error.message)
    }
  })
}

applyFilter(){
  let date = this.form.value;
  console.log("this.form.value : " + JSON.stringify(this.form.value))
  this.api.getAllCarts(date)
  .subscribe((res:any)=>{
    this.cart= res;
  }, error=>{
    console.error(error.status)
    if(error.status===404){
      alert(error.message)
    }
  })
}

deleteCarts(id:number){
  this.api.deleteTheCarts(id)
  .subscribe((res:any)=>{
    alert ("cart deleted with sucsses :" + id);
    this.getCart();
  }, error=>{
    console.error(error.status)
    if(error.status===404){
      alert(error.message)
    }
  })
}


details:any = {} ;
myProducts : any [] = [];
view(index:number){
this.details = this.cart[index];
console.log("this.details---------->" +  JSON.stringify(this.details.products));
this.myProducts = [];
for(var x in this.details.products){

  console.log(this.details.products[x].productId)
  this.api.getProductView(this.details.products[x].productId)
  .subscribe((res:any)=>{
     this.myProducts.push( {id:res.id,
      image:res.image, title:res.title, category:res.category, price:res.price})
  }, error=>{
    console.error(error.status)
    if(error.status===404){
      alert(error.message)
    }
  })
}

// this.details = this.cart[index];
 //console.log(JSON.stringify(this.details))
 /*
 this.api.getProductView(index ==0 ? index= index+1 : index=index)
  .subscribe((res:any)=>{
    console.log("Res---------->" +  JSON.stringify(res))

    this.details = {id:res.id,  image:res.image, title:res.title, category:res.category, price:res.price}

    console.log("details ---------->" +  JSON.stringify(this.details))

  }, error=>{
    console.error(error.status)
    if(error.status===404){
      alert(error.message)
    }
  })
  */
}
}
