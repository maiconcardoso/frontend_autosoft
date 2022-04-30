import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labor-crud',
  templateUrl: './labor-crud.component.html',
  styleUrls: ['./labor-crud.component.css']
})
export class LaborCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToLaborCreate() {
    this.router.navigate(['/labors/create']);
  }


}
