import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { item } from "src/app/models/itemlist";
import { ProductService } from "src/app/service/product.service";
import { GetProduct } from "../actions/product.action";

//state model

export class ProductStateModel {
    products: item[] = [];
    productLoded:any;
}

//state

@State<ProductStateModel>({
    name:'product',
    defaults:{
        products:[],
        productLoded:false
    }
  })

  @Injectable()
export class ProductState {
    constructor(private productservice: ProductService) { }

    //selector has logic to get state data

    //get employeelist from state

    @Selector()
    static getProductList(state:ProductStateModel){
        return state.products
    }

    @Selector()
    static productloded(state:ProductStateModel){
        return state.productLoded
    }

    @Action(GetProduct)
    getProduct({getState,setState}:StateContext<ProductStateModel>){
        console.log('state action');
        return this.productservice.getAllProduct().pipe(tap(res =>{
            console.log('tap res',res);
            const state = getState();

            setState({
                ...state,
                products:res,
                productLoded:true
            })
            console.log(state);
            
            
        }))
        
    }
}