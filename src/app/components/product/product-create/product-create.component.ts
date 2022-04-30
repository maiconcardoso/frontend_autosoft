import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    factoryCode: '',
    groupFamily: '',
    subGroup: '',
    application: '',
    brand: '',
    price: null
  }

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct() {
    this.service.create(this.product).subscribe(() => {
      this.service.showMessage( 'Sistema','Produto criado com sucesso!', 'toast-success');
      this.router.navigate(['/products']);
    })
  }

  cancel() {
    this.router.navigate(['/products']);
  }

}
