import { Component, signal, input, computed } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export default class ProductsGrid {
  category = input<string>('all');

  products = signal<Product[]>([
    {
      id: "p001",
      name: "BvdInflu3nc3 T-Shirt",
      description: "Drop shoulder oversize Tees",
      price: 44.99,
      imageUrl: "img/badInfluence2.png",
      rating: 4.5,
      reviewCount: 0,
      inStock: false,
      category: "Clothes",
    },
  ]);

  filteredProducts = computed(() => {
    if(this.category().toLowerCase() === 'all') return this.products();
    
    return this.products().filter(p => p.category.toLocaleLowerCase() === this.category().toLowerCase());
   });

   addToCart(product:Product) {
    console.log(product)
   }
}
