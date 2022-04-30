import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.css']
})
export class OrderDeleteComponent implements OnInit {


  order: Order = {
    creationDate: new Date,
    status: null,
    customer: {
      name: '',
      phoneNumber: '',
      cpf: '',
      email: '',
      city: '',
      address: '',
      cep: ''
    },
    items: [],
    labors: [],
    amount: null
  };
  modalRef: BsModalRef;
  value: number;

  constructor(private router: Router,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id_order');
    this.orderService.readById(id).subscribe(response => {
      this.order = response;
    });
  }

  modal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  deleteOrder() {
    if (this.value = 1) {
      this.orderService.delete(this.order).subscribe(() => {
        this.orderService.showMessage('Sistema', 'Ordem deletada com sucesso!', 'toast-success');
        this.router.navigate(['/orders']);
      })
    } else {
      this.decline();
    }
  }

  backToListOrders() {
    this.router.navigate([`orders/${this.order.id}`]);
  }

  confirm(): void {
    this.value = 1
    this.modalRef.hide();
    this.deleteOrder();
  }

  decline(): void {
    this.value = 2
    this.modalRef.hide();
  }

}
