import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-crud',
  templateUrl: './customer-crud.component.html',
  styleUrls: ['./customer-crud.component.css']
})
export class CustomerCrudComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigateToCustomer(): void {
    this.route.navigate(['/customer/create']);
  }

}
