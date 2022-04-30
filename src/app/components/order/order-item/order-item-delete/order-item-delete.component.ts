import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { map } from 'rxjs/operators';
import { OrderItem } from 'src/app/model/order-Item.model';
import { Order } from 'src/app/model/order.model';
import { Product } from 'src/app/model/product.model';
import { OrderItemService } from 'src/app/services/order-item.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-item-delete',
  templateUrl: './order-item-delete.component.html',
  styleUrls: ['./order-item-delete.component.css']
})
export class OrderItemDeleteComponent implements OnInit {

  item: Product;

  orderItems: OrderItem = {
    product: {
      name: '',
      factoryCode: '',
      groupFamily: '',
      subGroup: '',
      application: '',
      brand: '',
      price: null,
    },
    quantity: 1,
    order: null,
  };

  order: Order;
  id_order: string;
  modalRef: BsModalRef;
  value: number

  constructor(private orderService: OrderService,
    private route: ActivatedRoute,
    private orderItemService: OrderItemService,
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id_order');
    this.orderService.readById(id).pipe(
      map(response => {
        this.order = response;
        this.order.id = response.id;
        this.id_order = this.order.id.toString();
      })
    ).subscribe();

    const id_item = this.route.snapshot.paramMap.get('id_item');
    this.orderItemService.readById(id_item).subscribe(response => {
      this.orderItems = response;
    })
  }

  modal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  deleteItemByOrder() {
    if (this.value = 1) {
      this.orderItemService.delete(this.orderItems).subscribe(() => {
        this.orderService.showMessage('Sistema','Item deletado com sucesso!', 'toast-success');
        this.router.navigate([`/orders/update/${ this.id_order }`]);
      })
    } else {
      this.decline();
    }
  }

  cancel() {
    this.router.navigate([`orders/create/${this.id_order}`]);
  }


  confirm(): void {
    this.value = 1
    this.modalRef.hide();
    this.deleteItemByOrder();
  }
 
  decline(): void {
    this.value = 2
    this.modalRef.hide();
  }

}
