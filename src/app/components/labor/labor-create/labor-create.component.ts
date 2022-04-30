import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labor } from 'src/app/model/labor.model';
import { LaborService } from 'src/app/services/labor.service';

@Component({
  selector: 'app-labor-create',
  templateUrl: './labor-create.component.html',
  styleUrls: ['./labor-create.component.css']
})
export class LaborCreateComponent implements OnInit {

  labor: Labor = {
    description: '',
    groupFamily: '',
    subGroup: '',
    application: '',
    price: null
  }

  constructor(private router: Router, private service: LaborService) { }

  ngOnInit(): void {
  }

  createLabor() {
    this.service.create(this.labor).subscribe(() => {
      this.service.showMessage('Sistema' ,'Serviço criado com sucesso!', 'toast-success');
      this.router.navigate(['/labors']);
    })
  }

  cancel() {
    this.router.navigate(['/labors']);
  }

}
