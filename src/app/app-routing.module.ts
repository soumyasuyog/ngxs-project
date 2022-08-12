import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AddProductComponent } from './product-list/add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductComponent } from './product-list/single-product/single-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
   {path:"comp1",component:Comp1Component},
   {path:"comp2",component:Comp2Component},
   {path:"",component:ProductListComponent},
   {path:"all-product",component:ProductListComponent},
   {path:"all-product/:id",component:SingleProductComponent},
   {path:"add-product",component:AddProductComponent},
   {path:"update-product/:id",component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
