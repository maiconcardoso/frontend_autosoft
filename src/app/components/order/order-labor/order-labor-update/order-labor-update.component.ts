import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Labor } from 'src/app/model/labor.model';
import { OrderLabor } from 'src/app/model/order-labor.model';
import { Order } from 'src/app/model/order.model';
import { LaborService } from 'src/app/services/labor.service';
import { OrderLaborService } from 'src/app/services/order-labor.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-labor-update',
  templateUrl: './order-labor-update.component.html',
  styleUrls: ['./order-labor-update.component.css']
})
export class OrderLaborUpdateComponent implements OnInit {

  labor: Labor;

  orderLabors: OrderLabor = {
    labor: {
      description: '',
      groupFamily: '',
      subGroup: '',
      application: '',
      price: null,
    },
    quantity: 1,
    order: null,
    subTotal: null
  };

  order: Order;
  id_order: string;
  id_labor: string

  constructor(private laborService: LaborService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private orderLaborService: OrderLaborService,
    private router: Router) { }

  ngOnInit(): void {

    this.id_labor = this.route.snapshot.paramMap.get('id_labor');
    this.orderLaborService.readById(this.id_labor).subscribe(response => {  
      this.orderLabors = response;
      console.log(this.orderLabors)
    });

    const id = this.route.snapshot.paramMap.get('id_order');
    this.orderService.readById(id).pipe(
      map(response => {
        this.order = response;
        this.order.id = response.id;
        this.id_order = this.order.id.toString();
      })
    ).subscribe();

  }


  updateLaborByOrder(){
    this.orderLaborService.update(this.orderLabors).subscribe(() => {
      this.orderLaborService.showMessage('Sistema', 'Serviço Atualizado com Sucesso!', 'toast-success');
      this.orderLaborService.create(this.orderLabors, this.id_order).subscribe()
      this.router.navigate([`orders/create/${this.id_order}`]);
    });
  }

  cancel(){
    this.router.navigate([`orders/${this.id_order}`]);
  }

}
