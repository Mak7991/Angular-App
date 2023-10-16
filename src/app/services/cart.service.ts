import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/Movies';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Movies[] = [];
  localItem!: string | null;
  totalPrice: number = 0;

  constructor(
    private http: HttpClient
  ) {
    this.localItem = localStorage.getItem('movies');
    if (this.localItem == null) {
      this.items = [];
    } else {
      this.items = JSON.parse(this.localItem);
    }
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }

  addToCart(movie: Movies) {
    this.items.push(movie);
    localStorage.setItem('movies', JSON.stringify(this.items));
  }

  getTotalPrice() {
    for (let item of this.getItems()) {
      this.totalPrice += item.price;
    }
    return this.totalPrice;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('movies')
    return this.items;
  }
}
