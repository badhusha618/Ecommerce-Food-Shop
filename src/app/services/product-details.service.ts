import { Food } from './../models/food-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor() { }

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
        price: 10,
        favorite: false,
        stars: 4.5,
        imageUrl: 'https://www.kindpng.com/picc/m/106-1066017_stampede-pizza-pizza-ranch-combo-hd-png-download.png',
      },
      {
        id: 2,
        name: 'Burger',
        price: 20,
        favorite: true,
        stars: 4.7,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKb2k46PpDG56hqO4apYF2iQUZpshRtuk1pmdHtZrUmqjQqk3LlPAr5TV2OpgyLTWOLA&usqp=CAU',
      },
      {
        id: 3,
        name: 'Sandwitch',
        price: 5,
        favorite: false,
        stars: 3.5,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnGlgdLnRINdISZNcwzbgxbsD7RfF1fh3tw&usqp=CAU',
      },
      {
        id: 4,
        name: 'Sweets',
        price: 2,
        favorite: true,
        stars: 3.3,
        imageUrl: 'https://www.pngfind.com/pngs/m/12-122858_free-png-download-sweets-s-png-images-background.png',
      },
      {
        id: 5,
        name: 'Snacks',
        price: 11,
        favorite: false,
        stars: 3.0,
        imageUrl: 'https://png.pngtree.com/png-vector/20201229/ourlarge/pngtree-breakfast-snack-mcdonald-s-snack-combo-png-image_2665407.jpg',
      },
    ];
  }
}
