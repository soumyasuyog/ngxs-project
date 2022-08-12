import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-daterange',
  templateUrl: './daterange.component.html',
  styleUrls: ['./daterange.component.css']
})
export class DaterangeComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  

  constructor() { }

  ngOnInit(): void {
  }


  findpickervalue(){
    console.log(moment(this.range.value.start).format("YYYY/MM/DD"))
    console.log(moment(this.range.value.end).format("YYYY/MM/DD"))
  }

}
