import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-read',
  templateUrl: './order-read.component.html',
  styleUrls: ['./order-read.component.css']
})
export class OrderReadComponent implements OnInit {

  orders: Order[];
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
  name: string;
  orderFilter: any = {creationDate: '', status: ''};

  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.service.readAll().subscribe(response => {
      this.orders = response;
    })
  }
}
