import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  updateproductform:any = new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required])
  })

  proid:any
  title:any;
  description:any;
  price:any;

  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.proid = this.route.snapshot.params.id;
    console.log(this.proid);
    this.getSingleProduct();
    
  }

  getSingleProduct(){
    this.productService.singleProduct(this.proid).subscribe((res:any)=>{
      // this.updateproductform.patchValue(res.data);
      this.title = res.data[0].title;
      this.description = res.data[0].description;
      this.price = res.data[0].price;
      console.log(res.data);
      console.log(this.title);
      
      
    })
  }

  updateProduct(){
    if (this.updateproductform.valid) {
      console.log(this.updateproductform.value);

    }
    this.productService.updateProduct(this.updateproductform.value,this.proid).subscribe((res:any)=>{
      console.log(res);
      
    })
  }

}
