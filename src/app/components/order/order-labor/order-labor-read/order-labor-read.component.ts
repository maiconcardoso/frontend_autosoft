import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Labor } from 'src/app/model/labor.model';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-labor-read',
  templateUrl: './order-labor-read.component.html',
  styleUrls: ['./order-labor-read.component.css']
})
export class OrderLaborReadComponent implements OnInit {


  laborFilter: any = { description: '' };
  labors: Labor[];
  order: Order;
  id: string

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id_order');
    this.orderService.readById(id).pipe(
      map(response => {
        this.order = response;
        this.order.id = response.id;
        this.id = this.order.id.toString();
      })
    ).subscribe();
  }

}
