import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminCartsService {

  constructor(private http:HttpClient) { }

    getAllCarts(param?:any){
      //https://fakestoreapi.com/carts?startdate=2019-12-10&enddate=2020-10-10
      let params = new HttpParams();
      params = params.append("startDate", param?.start).append("endDate", param?.end)
      return this.http.get(environment.baseApi + "carts", {params})

    }

    deleteTheCarts(id:number){
      return this.http.delete(environment.baseApi + "carts/" + id)
    }



    getProductView(id:number){
      return this.http.get(environment.baseApi + "products/" + id)
    }



}
