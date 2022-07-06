import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food-item';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from '../services/product-details.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  food!: Food;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productDetailService:ProductDetailsService
  ) {
    this.activatedRoute.params.subscribe(params => this.product(params['id']))
  }

  ngOnInit(): void {
  }

  product(id : number){
    this.food = this.productDetailService.getFoodById(id);
    console.log(this.food);
  }
  addToCart(){
    // this.cartService.addToCart(this.food);
    // this.router.navigateByUrl('/cart-page');
  }
  buynow()
  {

  }
}
