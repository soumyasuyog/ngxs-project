import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  product:any;

  constructor(private productservice: ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:Params)=>{
      let id = params.get('id')
      console.log(id);
      this.getProductByid(id)
    })

  }

  getProductByid(id:any){
    this.productservice.singleProduct(id).subscribe((res:any)=>{
      this.product = res;
      console.log(this.product);
      
    })
  }

}
