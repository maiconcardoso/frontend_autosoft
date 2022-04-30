import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customer: Customer = {
    name: '',
    phoneNumber: '',
    email: '',
    cpf: '',
    city: '',
    address: '',
    cep: ''
  }

  constructor(private router: Router, 
    private service: CustomerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe(customer => {
      this.customer = customer;
    })
  }

  updateCustomer(): void {
    this.service.update(this.customer).subscribe(() => {
      this.service.showMessage('Sistema' ,` ${this.customer.name} atualizado com sucesso!`, 'toast-success');
      this.router.navigate(['/customer']);
    }) 
  }

  cancel() {
    this.router.navigate(['/customer']);
  }

}
