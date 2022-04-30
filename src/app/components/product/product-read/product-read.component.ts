import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  productFilter: any = {name: '', factoryCode: ''}
  

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.findAllProducts();
  }

  findAllProducts() {
    this.service.readAll().subscribe(response => {
      this.products = response;
    });
  }

}
