import { Component, input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductDataService } from '../../services/product-data.service';
import { BackButton } from "../../components/back-button/back-button";
import { ProductInfo } from './product-info/product-info';

@Component({
  selector: 'app-view-product-detail',
  imports: [BackButton, ProductInfo],
  templateUrl: './view-product-detail.html',
  styleUrl: './view-product-detail.scss',
})
export default class ViewProductDetail implements OnInit {
  productId = input.required<string>();
  product: Product = {
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


  constructor(private productDataService: ProductDataService) {}


  ngOnInit(): void {
    this.product = this.productDataService.getProductData(this.productId())
  }
  
}
