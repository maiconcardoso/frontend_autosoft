import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Labor } from 'src/app/model/labor.model';
import { LaborService } from 'src/app/services/labor.service';

@Component({
  selector: 'app-labor-update',
  templateUrl: './labor-update.component.html',
  styleUrls: ['./labor-update.component.css']
})
export class LaborUpdateComponent implements OnInit {

  labor: Labor = {
    description: '',
    groupFamily: '',
    subGroup: '',
    application: '',
    price: null
  };

  constructor(private service: LaborService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe(labors => {
      this.labor = labors;
    });
  }

  updateLabor(){
    this.service.update(this.labor).subscribe(() => {
      this.service.showMessage('Sistema' ,'Serviço atualizado com sucesso!', 'toast-success');
      this.router.navigate(['/labors']);
    })
  }

  cancel() {
    this.router.navigate(['/labors']);
  }

}
