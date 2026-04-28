import { Component, signal, input, computed, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export default class ProductsGrid implements OnInit {
  category = input<string>('all');

  products = signal<Product[]>([]);

  constructor(private productDataService: ProductDataService) {}

  ngOnInit(): void {
    this.products = signal<Product[]>(this.productDataService.getAllProducts())
  }

  filteredProducts = computed(() => {
    if(this.category().toLowerCase() === 'all') return this.products();
    
    return this.products().filter(p => p.category.toLocaleLowerCase() === this.category().toLowerCase());
   });

   addToCart(product:Product) {
    console.log(product)
   }
}
