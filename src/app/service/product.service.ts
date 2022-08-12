import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { item } from '../models/itemlist'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: any = environment.urlAddress;
  item!: item[];

  constructor(private http: HttpClient) { }


  getAllProduct(){
    return this.http.get<item[]>(this.baseUrl + '/allproducts')
  }

  addProduct(pro:item){
    return this.http.post(this.baseUrl + '/postproduct',pro)
  }

  singleProduct(id:any){
    const url = this.baseUrl + '/allproducts'
    console.log(url);
    return this.http.get<item[]>(`${url}/${id}`)
  }

  updateProduct(pro:item,id:any){
    const url = this.baseUrl + '/updateProduct'
    console.log(url);
    
    return this.http.put<item[]>(`${url}/${id}`, pro)
  }

  // `${this.url}/${emp.id}`,emp
}
