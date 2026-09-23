import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog';

@Component({
  selector: 'app-service-product-catalog',
  standalone: false,
  templateUrl: './service-product-catalog.html',
  styleUrls: ['./service-product-catalog.css'],
})
export class ServiceProductCatalogComponent implements OnInit {
  categories: any[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}