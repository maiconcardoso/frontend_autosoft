import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Labor } from 'src/app/model/labor.model';
import { OrderLabor } from 'src/app/model/order-labor.model';
import { LaborService } from 'src/app/services/labor.service';
import { OrderLaborService } from 'src/app/services/order-labor.service';

@Component({
  selector: 'app-labor-delete',
  templateUrl: './labor-delete.component.html',
  styleUrls: ['./labor-delete.component.css']
})
export class LaborDeleteComponent implements OnInit {

  labor: Labor = {
    description: '',
    groupFamily: '',
    subGroup: '',
    application: '',
    price: null
  }
  modalRef: BsModalRef;
  value: number;
  orderLabor: OrderLabor[];

  constructor(private service: LaborService,
    private orderLaborService: OrderLaborService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private modalService: BsModalService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe(labor => {
      this.labor = labor;
    });

    this.orderLaborService.readByIdLabor(id).subscribe(response => {
      this.orderLabor = response;
      //console.log(this.orderLabor);
    });
  }

  modal(template: TemplateRef<any>) {
    if (this.orderLabor.length > 0) {
      this.service.showMessage('Sistema', 'Serviço com Ordem, impossível deletar', 'toast-error');
    } else {
      this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }
  }

  deleteLabor() {
    if (this.value == 1) {
      this.service.delete(this.labor).subscribe(() => {
        this.service.showMessage('Sistema', 'Serviço deletado com sucesso!', 'toast-success');
        this.router.navigate(['/labors']);
      })
    } else {
      this.decline();
    }
  }

  cancel() {
    this.router.navigate(['/labors']);
  }

  confirm(): void {
    this.value = 1;
    this.modalRef?.hide();
    this.deleteLabor();
    //console.log(this.value)
  }

  decline(): void {
    this.value = 2;
    this.modalRef?.hide();
    //console.log(this.value)
  }

}
