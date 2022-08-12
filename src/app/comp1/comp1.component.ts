import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DesignUtilityService } from '../service/design-utility.service';
import { item } from '../models/itemlist'
import { ProductState } from '../store/state/product.state';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  // allVideos:any=[];
  videos:any;
  
  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    // this.getVideos();
    let state = {
      name:'soumya',
      id:1,
      active:false,
      data:'test data'
    }
    
    let updatestate = {
      ...state,
      active:true,
      id:2
    }
    
    
  }

  getVideos(){
    if (this._du.videos) {
      this.videos = this._du.videos
      console.log("if block");
      
    }else{
      this._du.fetchVideos().subscribe((res:any)=>{
        console.log(res);
        this.videos = res;
        console.log("else block");

        this._du.videos = res
      })
    }
    
  }

}
