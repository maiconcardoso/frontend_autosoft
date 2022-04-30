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
  selector: 'app-order-item-update',
  templateUrl: './order-item-update.component.html',
  styleUrls: ['./order-item-update.component.css']
})
export class OrderItemUpdateComponent implements OnInit {

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
    subTotal: null
  };

  order: Order;
  id_order: string;
  id_item: string

  constructor(private productService: ProductService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private orderItemService: OrderItemService,
    private router: Router) { }

  ngOnInit(): void {

    this.id_item = this.route.snapshot.paramMap.get('id_item');
    this.orderItemService.readById(this.id_item).subscribe(response => {  
      this.orderItems = response;
      console.log(this.orderItems)
    });

    const id = this.route.snapshot.paramMap.get('id_order');
    this.orderService.readById(id).pipe(
      map(response => {
        this.order = response;
        this.order.id = response.id;
        this.id_order = this.order.id.toString();
      })
    ).subscribe();
  }

  updateItemByOrder(){
    this.orderItemService.update(this.orderItems).subscribe(() => {
      this.orderItemService.showMessage('Sistema', 'Produto Atualizado com Sucesso!', 'toast-success');
      this.orderItemService.create(this.orderItems, this.id_order).subscribe()
      this.router.navigate([`orders/create/${this.id_order}`]);
    });
  }

  cancel() {
    this.router.navigate([`orders/create/${this.id_order}`]);
  }

}
