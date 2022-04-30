import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

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

  constructor(private service: OrderService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe(response => {
      this.order = response;
    });
  }

  backToListOrders(){
    this.router.navigate(['orders']);
  }

  print(){
    window.print();
  }

}
