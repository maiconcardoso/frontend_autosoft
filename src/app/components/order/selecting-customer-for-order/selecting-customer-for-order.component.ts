import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { Order } from 'src/app/model/order.model';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-selecting-customer-for-order',
  templateUrl: './selecting-customer-for-order.component.html',
  styleUrls: ['./selecting-customer-for-order.component.css']
})
export class SelectingCustomerForOrderComponent implements OnInit {

  customers: Customer[];
  customerFilter: any = { name: '' };

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
    items: null,
    labors: null,
    amount: null
  }

  constructor(private serviceCustomer: CustomerService, private serviceOrder: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.serviceCustomer.readAll().subscribe(response => {
      this.customers = response;
    })
  }

  createOrder() {
    console.log(this.order.customer);
    this.serviceOrder.create(this.order).subscribe(() => {
       this.serviceOrder.showMessage('Sistema', 'Ordem criada com sucesso', 'toast-success')
    });
  }

  cancel(){
    this.router.navigate(['orders'])
  }


}
