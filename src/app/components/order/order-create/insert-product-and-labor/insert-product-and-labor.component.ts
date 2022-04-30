import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-insert-product-and-labor',
  templateUrl: './insert-product-and-labor.component.html',
  styleUrls: ['./insert-product-and-labor.component.css']
})
export class InsertProductAndLaborComponent implements OnInit {

  order: Order = {
    creationDate: null,
    status: null,
    customer: {
      name: '',
      phoneNumber: '',
      email: '',
      cpf: '',
      city: '',
      address: '',
      cep: ''
    },
    items: [],
    labors: [],
    amount: null
  };
  id: string;

  constructor(private orderService: OrderService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderService.readById(id).subscribe(response => {
      this.order = response;
      this.id = this.order.id.toString();
    });
  }

  insertProductsInOrder(){
    if (this.id == undefined || this.id == null) {
      this.orderService.showMessage('Sistema', 'Crie uma ORDEM antes de inserir SERVIÇOS', 'toast-error');
    } else {
      this.router.navigate([`orders/create/${this.id}/products`])
    }
  }

  insertLaborsInOrder(){
    if (this.id == undefined || this.id == null) {
      this.orderService.showMessage('Sistema', 'Crie uma ORDEM antes de inserir Produtos', 'toast-error');
    } else {
      this.router.navigate([`orders/create/${this.id}/labors`])
    }
  }

  printOrder() {
    this.router.navigate([`/orders/order-print/${ this.id }`])
  }

  backToOrders(){
    this.router.navigate(['orders']);
  }

}
