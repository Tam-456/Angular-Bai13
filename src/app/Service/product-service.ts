import { Service } from '@angular/core';
import { Product } from '../classes/IProduct';

@Service()
export class ProductService {
    products: Product[] = [
          { id: 1, name: 'Product 1', price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH5SAVL4BRuWNB-Pc3kL1W__36koyqppwNYh8XAt4cg&s=10' },
          { id: 2, name: 'Product 2', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH5SAVL4BRuWNB-Pc3kL1W__36koyqppwNYh8XAt4cg&s=10' },
          { id: 3, name: 'Product 3', price: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH5SAVL4BRuWNB-Pc3kL1W__36koyqppwNYh8XAt4cg&s=10' },
          { id: 4, name: 'Product 4', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH5SAVL4BRuWNB-Pc3kL1W__36koyqppwNYh8XAt4cg&s=10' },
          { id: 5, name: 'Product 5', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH5SAVL4BRuWNB-Pc3kL1W__36koyqppwNYh8XAt4cg&s=10' },
        ]
    constructor() {}
    getProducts()
    {
        return this.products;
    }
}
