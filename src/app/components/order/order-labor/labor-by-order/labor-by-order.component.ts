import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Labor } from 'src/app/model/labor.model';
import { Order } from 'src/app/model/order.model';
import { LaborService } from 'src/app/services/labor.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-labor-by-order',
  templateUrl: './labor-by-order.component.html',
  styleUrls: ['./labor-by-order.component.css']
})
export class LaborByOrderComponent implements OnInit {

  labors: Labor[];
  laborFilter: any = {description: '', groupFamily: '', subGroup: '', application: ''};
  order: Order;
  id_customer: string;
  id_order: string


  constructor(private orderService: OrderService, 
    private route: ActivatedRoute, 
    private laborService: LaborService,
    private router: Router) { }

  ngOnInit(): void {
    this.id_order = this.route.snapshot.paramMap.get('id_order');
    this.orderService.readById(this.id_order).subscribe(response => {
      this.order = response;
      this.order.customer.id = response.customer.id;
      this.id_customer = this.order.customer.id.toString();
    });

    this.laborService.readAll().subscribe(response => {
      this.labors = response;
    });
  }

  backToOrder(){
    this.router.navigate([`orders/create/${this.id_order}`]);
  }


}
