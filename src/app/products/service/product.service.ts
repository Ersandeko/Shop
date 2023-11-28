import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<any>(environment.baseApi + "products")
  }

  //https://fakestoreapi.com/products/category/jewelery
  getAllProductsCategorie(keyword:string){
    return this.http.get<any>(environment.baseApi + "products/category/" + keyword)
  }

  getProductById(id:any){
    return this.http.get<any>(environment.baseApi + "products/" + id)
  }
}
