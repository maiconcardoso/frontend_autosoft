import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { OrderItem } from 'src/app/model/order-Item.model';
import { Order } from 'src/app/model/order.model';
import { Product } from 'src/app/model/product.model';
import { OrderItemService } from 'src/app/services/order-item.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-item-create',
  templateUrl: './order-item-create.component.html',
  styleUrls: ['./order-item-create.component.css']
})
export class OrderItemCreateComponent implements OnInit {

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


  constructor(private productService: ProductService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private orderItemService: OrderItemService,
    private router: Router) { }

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
    this.productService.readById(id_item).subscribe(response => {
      this.orderItems.product = response;
    });

  }

  createItemByOrder(){
    this.orderItemService.create(this.orderItems, this.id_order).subscribe(() => {
      this.router.navigate([`orders/create/${this.id_order}/products`]);
      this.orderItemService.showMessage('Sistema', 'Produto adicionado à Ordem', 'toast-success');
    });
  }

  cancel() {
    this.router.navigate([`orders/create/${this.id_order}/products`]);
  }

}
