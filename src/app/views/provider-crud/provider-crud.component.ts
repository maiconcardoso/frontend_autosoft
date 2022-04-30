import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-crud',
  templateUrl: './provider-crud.component.html',
  styleUrls: ['./provider-crud.component.css']
})
export class ProviderCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProvider(): void {
    this.router.navigate(['/providers/create']);
  }

}
