import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OrderItem } from 'src/app/model/order-Item.model';
import { Product } from 'src/app/model/product.model';
import { Provider } from 'src/app/model/provider.model';
import { OrderItemService } from 'src/app/services/order-item.service';
import { ProductService } from 'src/app/services/product.service';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

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
  modalRef: BsModalRef;
  value: number;
  orderItems: OrderItem[];

  constructor(private router: Router, 
    private productService: ProductService, 
    private orderItemService: OrderItemService,
    private route: ActivatedRoute, private providerService: ProviderService, 
    private modalService: BsModalService) { }

  ngOnInit(): void {
    const id = `${this.route.snapshot.paramMap.get('id')}`;
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });

    this.providerService.readAll().subscribe(providers => {
      this.listProviders = providers;
    });

    this.orderItemService.readByIdProduct(id).subscribe(response => {
      this.orderItems = response;
      console.log(this.orderItems)
    });
  }

  modal(template: TemplateRef<any>) {
    if (this.orderItems.length > 0) {
      this.productService.showMessage('Sistema', 'Produto com Ordem de Serviço, impossível deletar', 'toast-error');
    } else {
      this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }
  }

  deleteProduct() {
    if (this.value == 1) {
      this.productService.delete(this.product).subscribe(() => {
        this.productService.showMessage('Sistema', 'Produto deletado com sucesso!', 'toast-success');
        this.router.navigate(['/products']);
      })
    } 
  }

  cancel() {
    this.router.navigate(['/products']);
  }

  confirm(): void {
    this.value = 1;
    this.modalRef?.hide();
    this.deleteProduct();
    //console.log(this.value)
  }

  decline(): void {
    this.value = 2;
    this.modalRef?.hide();
    //console.log(this.value)
  }


}
