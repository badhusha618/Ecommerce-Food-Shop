import { Food } from './../models/food-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsById(id: number): Food[] {
    return id == 0 ?
      this.getAll() :
      this.getAll().filter(food => food.id);
  }

  getAll() : Food [] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 200,
        cookTime: '10-20',
        origins: ['US'],
        favorite: false,
        stars: 4.5,
        imageUrl: 'https://www.kindpng.com/picc/m/106-1066017_stampede-pizza-pizza-ranch-combo-hd-png-download.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Burger',
        price: 120,
        cookTime: '15-30',
        origins: ['US'],
        favorite: true,
        stars: 4.7,
        imageUrl: 'https://static.onecms.io/wp-content/uploads/sites/9/2021/05/19/urdaburger-FT-RECIPE0621.jpg',
      },
      {
        id: 3,
        name: 'Sandwitch',
        price: 90,
        cookTime: '20-35',
        origins: ['italy'],
        favorite: false,
        stars: 3.5,
        imageUrl: 'https://static.toiimg.com/thumb/54714340.cms?imgsize=458099&width=800&height=800',
      },
      {
        id: 4,
        name: 'Milk Sweets 1kg',
        price: 300,
        cookTime: '2',
        origins: ['Gujarath'],
        favorite: true,
        stars: 3.3,
        imageUrl: 'https://www.pngfind.com/pngs/m/12-122858_free-png-download-sweets-s-png-images-background.png',
      },
      {
        id: 5,
        name: 'Snacks combo',
        price: 130,
        cookTime: '2',
        origins: ['Tamil Nadu'],
        favorite: false,
        stars: 3.0,
        imageUrl: 'https://media.istockphoto.com/photos/group-of-sweet-and-salty-snacks-perfect-for-binge-watching-picture-id1149135424',
      },
    ];
  }
}
