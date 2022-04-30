import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-crud',
  templateUrl: './order-crud.component.html',
  styleUrls: ['./order-crud.component.css']
})
export class OrderCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToNewOrder(){
    this.router.navigate(['/orders/create'])
  }

}
