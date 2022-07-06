import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { Food } from '../models/food-item';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  food!: Food;

  constructor(
    private productDetailService: ProductDetailsService,
  ) { }

  ngOnInit(): void {
  }

  product(id : number){
    this.food = this.productDetailService.getFoodById(id);
    console.log(this.food);
  }
}
