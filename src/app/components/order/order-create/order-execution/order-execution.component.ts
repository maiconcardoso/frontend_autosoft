import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/model/order.model';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-execution',
  templateUrl: './order-execution.component.html',
  styleUrls: ['./order-execution.component.css']
})
export class OrderExecutionComponent implements OnInit {

  order: Order = {
    creationDate: new Date(),
    status: null,
    customer: {
      name: '',
      phoneNumber: '',
      email: '',
      cpf: '',
      city: '',
      address: '',
      cep: ''
    },
    items: [],
    labors: [],
    amount: null,
    customerName: null
  };
  orders: Order[];
  id_order: string;

  constructor(private orderService: OrderService,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.customerService.readById(id).subscribe(response => {
      this.order.customer = response;
    });
  }

  createOrder() {
    if (this.order.status != null) {
      this.orderService.create(this.order).pipe(
        map(response => {
          this.order.id = response.id;
          this.id_order = this.order.id.toString();
          this.orderService.showMessage('Sistema', 'Ordem criada com sucesso!', 'toast-success');
          this.router.navigate([`orders/create/${this.id_order}`]);
        })
      ).subscribe();
    } else {
      this.orderService.showMessage('Sistema', 'Informe a situação  da Ordem!', 'toast-error');
    }
  }

  cancel() {
    this.router.navigate(['orders/create']);
  }

}
