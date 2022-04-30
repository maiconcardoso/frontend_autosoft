import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer: Customer = {
    name: '',
    phoneNumber: '',
    email: '',
    cpf: '',
    city: '',
    address: '',
    cep: ''
  }

  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  createCustomer() {
    if (this.customer.name != '') {
      this.service.create(this.customer).subscribe(() => {
        this.service.showMessage('Sistema', `${this.customer.name} foi cadastrado com sucesso`, 'toast-success');
        this.router.navigate(['/customer']);
      })
    } else {
      this.service.showMessage('Sistema',
        'O nome do cliente deve ser preenchido',
        'toast-info');
    }
  }

  cancel() {
    this.router.navigate(['/customer']);
  }

}
