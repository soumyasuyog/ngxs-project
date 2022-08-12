import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { usersData } from './user';
import { first } from 'rxjs/operators';
import { Chart, registerables } from "chart.js";
import { Select, Store } from '@ngxs/store';
import { GetProduct } from '../store/actions/product.action';
import { item } from '../models/itemlist';
import { ProductState } from '../store/state/product.state';
import { Observable } from 'rxjs';
Chart.register(...registerables);

@Component({
  selector: 'app-demo-project',
  templateUrl: './demo-project.component.html',
  styleUrls: ['./demo-project.component.css']
})
export class DemoProjectComponent implements OnInit {

  externalfileData: any[] = usersData;

  products: item[]=[];
  @Select(ProductState.getProductList)
  product$!: Observable<string[]>;

  userData: any = [
    {
      id: 1,
      name: "soumya",
      age: 27
    }, {
      id: 1,
      name: "Rahul",
      age: 25
    }, {
      id: 1,
      name: "Bivek",
      age: 29
    }
  ]

  // @ViewChild('hello', { static: false })
  // divHello!: ElementRef;

  @ViewChild('hello')
  divHelloo!: { nativeElement: any };

  chart!: Chart;
  canvas: any;
  ctx: any;

  constructor(private productservice: ProductService , private store:Store) { }

  ngOnInit(): void {
    this.getProduct()
  }

  ngAfterViewInit() {
    // this.divHello.nativeElement.innerHTML = "Hello Angularew";

    this.canvas = this.divHelloo.nativeElement;
    // console.log(this.canvas);
    

    this.chart = new Chart(this.canvas, {
      type: "polarArea",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // console.log(this.chart);
    console.log(this.product$);

    
  }

  getProduct() {
    this.store.dispatch(new GetProduct());
    // this.productservice.getAllProduct().pipe().subscribe((item: any) => {
    //   console.log(item);

    // })
    this.product$.subscribe((res:any) =>{
      this.products = res.data
      console.log('state slice =>',res.data)
    })
  }

}
