import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductDetailsService,
  ) { }

  ngOnInit(): void {
  }
product(id : number){
  this.productService.getAllFoodsById(id)
}
}
