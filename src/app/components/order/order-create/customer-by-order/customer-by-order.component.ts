import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-by-order',
  templateUrl: './customer-by-order.component.html',
  styleUrls: ['./customer-by-order.component.css']
})
export class CustomerByOrderComponent implements OnInit {

  customers: Customer[];
  customer: Customer;
  customerFilter: any = {name: ''}

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.readAll().subscribe(response => [
      this.customers = response
    ]);
  }

  cancel(){
    this.router.navigate(['orders'])
  }
}
