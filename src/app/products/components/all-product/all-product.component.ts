import { ProductService } from './../../service/product.service';
import { Component, Input, OnInit, TrackByFunction } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  products: Product[] = [];
  category: any = [];
  loading: boolean = false;
  title:string = "Categories";
  item:any= {};
  cartProduct: any[] = [];
  @Input() count: number = 10;
  trackByFn: TrackByFunction<any> | undefined ;

  constructor(private api:ProductService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategory()
  }

  getProducts(){
    this.loading=true;
    this.api.getAllProducts()
    .subscribe(res=>{
      this.loading=false;
      this.products = res
     // console.log('this.products' + JSON.stringify(this.products))
    }, error=>{
      //alert (JSON.stringify(error))
      this.loading=false;
      console.error(error.status)
      if(error.status===404){
        alert(error.message)
      }
    })
  }


  getCategory(){
    this.loading=true;
    this.api.getAllProducts()
    .subscribe(res=>{
      this.loading=false;

      for(let i=0; i<res.length; i++){
        let myCategory = res[i].category;
        if(!this.category.includes(myCategory)){
            this.category.push(myCategory)
        }
      }
    }, error=>{
      this.loading=false;
      //alert (JSON.stringify(error))
      console.error(error.status)
      if(error.status===404){
        alert(error.message)
      }
    })
  }

  fitreCategorie(event:any){
    this.loading=true;
    let valueCategorie = event.target.value;
    //console.log(valueCategorie)
   // valueCategorie=="All Selected" ?  valueCategorie=null : valueCategorie;

   let myFiltre;
   (valueCategorie!="All selected") ? myFiltre =this.api.getAllProductsCategorie(valueCategorie) : myFiltre=this.api.getAllProducts()

   myFiltre
    .subscribe(res=>{
      this.loading=false;
      this.products = res

    }, error=>{
      this.loading=false;
      //alert (JSON.stringify(error))
      console.error(error.status)
      if(error.status===404){
        alert(error.message)
      }
    })
  }


  addTocarEvent(event:any){
    console.log("event " +  event)
  //  this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProduct.find(item => item.item.id == event.item.id)
      if(exist){
          alert ("Product is already in you cart")
      }else{
        this.cartProduct.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProduct))
      }

    }else{
      this.cartProduct.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProduct))
    }

    console.log("cartProduct from localStorage" + JSON.stringify(this.cartProduct))
  }



}


