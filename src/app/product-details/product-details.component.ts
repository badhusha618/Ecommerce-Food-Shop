import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addToCart(){
    // this.cartService.addToCart(this.food);
    // this.router.navigateByUrl('/cart-page');
  }
  buynow()
  {
    
  }
}
