import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { Order } from 'src/app/model/order.model';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {

  customerFilter: any = {name: ''}

  order: Order = {
    creationDate: null,
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
    amount: null
  };
  id: string;
  customers: Customer[];

  
  customer: Customer = {
    name: '',
    phoneNumber: '',
    email: '',
    cpf: '',
    city: '',
    address: '',
    cep: ''
  }

  constructor(private orderService: OrderService, 
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id_order');
    this.orderService.readById(id).subscribe(response => {
      this.order = response;
      this.id = this.order.id.toString();
    });

    this.customerService.readAll().subscribe(response => {
      this.customers = response;
    })
  }

  orderUpdate() {
    this.orderService.update(this.order).subscribe(() => {
      this.orderService.showMessage('Sistema', "Ordem Atualizada com sucesso!", 'toast-success');
      this.router.navigate([`/orders/create/${this.id}`]);
    })
  }

  cancel(){
    this.router.navigate([`/orders/${this.id}`]);
  }

}
