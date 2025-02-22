import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Smartphone', price: 500, category: 'Mobile' },
    { id: 2, name: 'Laptop', price: 1200, category: 'Computers' },
    { id: 3, name: 'Headphones', price: 100, category: 'Accessories' },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  constructor() { }
}
