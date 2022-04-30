import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Labor } from 'src/app/model/labor.model';
import { OrderLabor } from 'src/app/model/order-labor.model';
import { Order } from 'src/app/model/order.model';
import { LaborService } from 'src/app/services/labor.service';
import { OrderLaborService } from 'src/app/services/order-labor.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-labor-create',
  templateUrl: './order-labor-create.component.html',
  styleUrls: ['./order-labor-create.component.css']
})
export class OrderLaborCreateComponent implements OnInit {

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

  constructor(private laborService: LaborService,
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
    this.laborService.readById(id_labor).subscribe(response => {
      this.orderLabors.labor = response;
    })
  }


  createLaborByOrder() {
    this.orderLaborService.create(this.orderLabors, this.id_order).subscribe(() => {
      this.router.navigate([`orders/create/${this.id_order}/labors`]);
      this.orderLaborService.showMessage('Sistema', 'Serviço adicionado à Ordem', 'toast-success');
    })
  }

  cancel() {
    this.router.navigate([`orders/create/${this.id_order}/labors`]);
  }
}
