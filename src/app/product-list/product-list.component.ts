import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { item } from '../models/itemlist';
import { ProductService } from '../service/product.service';
import { GetProduct } from '../store/actions/product.action';
import { ProductState } from '../store/state/product.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnDestroy {

  // productList:any=[];
  id:any;
  productLoadsub:any;

  products: item[]=[];
  @Select(ProductState.getProductList)
  product$!: Observable<string[]>;

  @Select(ProductState.productloded)
  productloded$!:Observable<any>;

  constructor(private productservice: ProductService,private router : Router, private store:Store) { }

  ngOnInit(): void {
    this. getAllProducts();
  }

  getAllProducts(){
    this.productLoadsub = this.productloded$.subscribe((loadedproduct:any) =>{
      if (!loadedproduct) {
        this.store.dispatch(new GetProduct());
      }
    })

    this.product$.subscribe((res:any) =>{
      this.products = res.data
      console.log('state slice =>',res.data)
    })

    // this.productservice.getAllProduct().subscribe((res:any)=>{
    //   this.productList = res.data;
    //   this.id = this.productList.id;
      
    // })
  }

  ngOnDestroy(){
    this.productLoadsub.unsubscribe()
  }
  // addProduct(){
  //   this.router.navigate(['/add-product'])
  // }
}
