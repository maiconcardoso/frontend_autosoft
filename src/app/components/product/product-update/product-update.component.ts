import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { Provider } from 'src/app/model/provider.model';
import { ProductService } from 'src/app/services/product.service';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    factoryCode: '',
    groupFamily: '',
    subGroup: '',
    application: '',
    brand: '',
    price: null
  };

  listProviders: Provider[];
  provider: Provider;

  constructor(private router: Router, private service: ProductService, private route: ActivatedRoute, private providerService: ProviderService) { }

  ngOnInit(): void {
    const id = `${this.route.snapshot.paramMap.get('id')}`;
    this.service.readById(id).subscribe(product => {
      this.product = product;
    });

    this.providerService.readAll().subscribe(providers => {
      this.listProviders = providers;
    });
  }

  updateProduct() {
    this.service.update(this.product).subscribe(() => {
      this.service.showMessage('Sistema' ,'Produto atualizado com sucesso!', 'toast-success');
      this.router.navigate(['/products']);
    })
  }

  cancel() {
    this.router.navigate(['/products']);
  }

}
