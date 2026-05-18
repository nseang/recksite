import { Injectable, EventEmitter, signal} from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  // public getProductData = new EventEmitter<Product>();
  emptyProduct: Product = {
      id: "",
      name: "",
      description: "",
      price: 0,
      imageUrl: "",
      rating: 0,
      reviewCount: 0,
      inStock: false,
      category: "",
  }

  products: Product[] = [
    {
      id: "p001",
      name: "BvdInflu3nc3 T-Shirt",
      description: "Drop shoulder oversize Tees Sizes come in s-xl",
      price: 44.99,
      imageUrl: "img/badInfluence2.png",
      rating: 4.5,
      reviewCount: 0,
      inStock: false,
      category: "Clothes",
    }
    // },
    // {
    //   id: "p002",
    //   name: "BvdInflu3nc3 T-Shirt Flex",
    //   description: "Drop shoulder oversize Tees. Sizes come in s-xl",
    //   price: 44.99,
    //   imageUrl: "img/badInfluence2.png",
    //   rating: 4.5,
    //   reviewCount: 0,
    //   inStock: true,
    //   category: "Clothes",
    // },
  ];

  getProductData(productId: string): Product {
    let product = this.products.find(p => p.id === productId);
    return product ?? this.emptyProduct
  }

  getAllProducts(): Product[] {
    return this.products
  }
}
