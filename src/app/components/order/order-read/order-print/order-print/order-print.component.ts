import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-print',
  templateUrl: './order-print.component.html',
  styleUrls: ['./order-print.component.css']
})
export class OrderPrintComponent implements OnInit {

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
  id: number;

  constructor(private service: OrderService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe(response => {
      this.order = response;
      this.id = this.order.id;
    });
  }

  backToListOrders(){
    this.router.navigate([`orders/create/${this.id}`]);
  }

  print(){
    window.print();
  }
  

}
