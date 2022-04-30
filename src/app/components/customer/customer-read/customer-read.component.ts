import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css'],
})
export class CustomerReadComponent implements OnInit {

  customers: Customer[];
  customerFilter: any = { name: ''};

  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.findAllCustomers();
  }

  findAllCustomers() {
    this.service.readAll().subscribe(customers => {
      this.customers = customers;
      //console.log(this.customers)
    });
  }

  findAllCustomersPageable() {
    this.service.readPageable().subscribe(customer => {
      this.customers = customer.content;
      //console.log(this.customers)
    })
  }

}
