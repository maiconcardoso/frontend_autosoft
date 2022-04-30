import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Event, EventListener } from 'ngx-bootstrap/utils/facade/browser';
import { EventListenerOptions } from 'rxjs/internal/observable/fromEvent';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer: Customer = {
    name: '',
    phoneNumber: '',
    email: '',
    cpf: '',
    city: '',
    address: '',
    cep: ''
  }
  modalRef: BsModalRef;
  value?: number = null;
  orders: Order[];


  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: CustomerService,
    private modalService: BsModalService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe(customer => {
      this.customer = customer

      this.orderService.readByNameCustomer(this.customer.name).subscribe(response => {
        this.orders = response;
        //console.log(this.orders)
      });
    });

  }

  confirm(): void {
    this.value = 1;
    this.modalRef?.hide();
    this.deleteCustomer();
    //console.log(this.value)
  }

  decline(): void {
    this.value = 2;
    this.modalRef?.hide();
    //console.log(this.value)
  }

  modal(template: TemplateRef<any>) {
    console.log(this.orders)
    if (this.orders.length > 0) {
      this.service.showMessage('Sistema', 'Cliente possui Ordem de Serviço, impossível deletar', 'toast-error');
    } else {
      this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }
  }

  deleteCustomer() {
    if (this.value == 1) {
      this.service.delete(this.customer).subscribe(() => {
        this.service.showMessage('Sistema', 'Cliente deletado com sucesso!', 'toast-success');
        this.router.navigate(['/customer']);
      })
    }
  }

  cancel() {
    this.router.navigate(['/customer']);
  }

}
