import { Component,OnInit } from '@angular/core';
import {ProductsDataService} from '../services/products-data.service'


@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.css']
})
export class MainsectionComponent implements OnInit{
  p:any
  products:any
  SortbyParam = '';
  SortDirection = 'asc';
  constructor(private productData:ProductsDataService){}
   
   ngOnInit(): void {

     this.productData.products().subscribe((data)=>{
       this.products=data.products;
      },
      (error)=>{
        console.error('Error fetching data:', error);
      }
      )
    }
    onSortDirection() {
      if (this.SortDirection === 'desc') {
        this.SortDirection = 'asc';
      } else {
        this.SortDirection = 'desc';
      }
    }

}
