import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  addproductform:any = new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required])
  })
  titledata:any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(){
    const formData = {
      titledata : this.addproductform.value.title,
      description : this.addproductform.value.description,
      price : this.addproductform.value.price

    }
    if (this.addproductform.valid) {
      console.log(this.addproductform.value);

    }
    
    this.productService.addProduct(this.addproductform.value).subscribe((res:any)=>{
      console.log(res);
      
    })
  }

}
