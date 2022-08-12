import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../service/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  // allVideos:any;
  videos:any;

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    this.getVideos();
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
