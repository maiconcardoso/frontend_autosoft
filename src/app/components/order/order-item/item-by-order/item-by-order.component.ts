import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order.model';
import { Product } from 'src/app/model/product.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-by-order',
  templateUrl: './item-by-order.component.html',
  styleUrls: ['./item-by-order.component.css']
})
export class ItemByOrderComponent implements OnInit {

  itemFilter: any = {name: ''};
  items: Product[];
  order: Order;
  id_customer: string;
  id_order: string

  constructor(private orderService: OrderService, 
    private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.id_order = this.route.snapshot.paramMap.get('id_order');
    this.orderService.readById(this.id_order).subscribe(response => {
      this.order = response;
      this.order.customer.id = response.customer.id;
      this.id_customer = this.order.customer.id.toString();
    });

    this.productService.readAll().subscribe(response => {
      this.items = response;
    });
    
  }

  backToOrder() {
    this.router.navigate([`orders/create/${this.id_order}`]);
  }

}
