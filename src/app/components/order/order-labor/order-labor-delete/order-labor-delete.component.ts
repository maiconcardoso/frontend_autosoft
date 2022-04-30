import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { map } from 'rxjs/operators';
import { Labor } from 'src/app/model/labor.model';
import { OrderLabor } from 'src/app/model/order-labor.model';
import { Order } from 'src/app/model/order.model';
import { OrderLaborService } from 'src/app/services/order-labor.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-labor-delete',
  templateUrl: './order-labor-delete.component.html',
  styleUrls: ['./order-labor-delete.component.css']
})
export class OrderLaborDeleteComponent implements OnInit {

  labor: Labor;
  orderLabors: OrderLabor = {
    quantity: 1,
    order: null,
    labor: {
      description: '',
      groupFamily: '',
      subGroup: '',
      application: '',
      price: null
    }
  };
  id_order: string;
  order: Order;
  modalRef: BsModalRef;
  value: number;

  constructor(private modalService: BsModalService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private orderLaborService: OrderLaborService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id_order');
    this.orderService.readById(id).pipe(
      map(response => {
        this.order = response;
        this.order.id = response.id;
        this.id_order = this.order.id.toString();
      })
    ).subscribe();

    const id_labor = this.route.snapshot.paramMap.get('id_labor');
    this.orderLaborService.readById(id_labor).subscribe(response => {
      this.orderLabors = response;
    });

  }

  modal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  deleteLaborByOrder() {
    if (this.value == 1) {
      this.orderLaborService.delete(this.orderLabors).subscribe(() => {
        this.orderService.showMessage('Sistema','Serviço deletado com sucesso!', 'toast-success');
        this.router.navigate([`/orders/update/${ this.id_order }`]);
      })
    } else {
      this.decline();
    }
  }

  cancel() {
    this.router.navigate([`orders/create/${this.id_order}`]);
  }


  confirm(): void {
    this.value = 1
    this.modalRef.hide();
    this.deleteLaborByOrder();
  }
 
  decline(): void {
    this.value = 2
    this.modalRef.hide();
  }

}
