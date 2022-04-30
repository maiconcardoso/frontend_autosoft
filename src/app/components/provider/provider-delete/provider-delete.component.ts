import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Provider } from 'src/app/model/provider.model';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-provider-delete',
  templateUrl: './provider-delete.component.html',
  styleUrls: ['./provider-delete.component.css']
})
export class ProviderDeleteComponent implements OnInit {

  provider: Provider = {
    name: '',
    phoneNumber: '',
    email: '',
    cnpj: '',
    city: '',
    address: '',
    cep: ''
  };
  modalRef: BsModalRef;
  value: number;

  constructor(private route: ActivatedRoute, private service: ProviderService,
    private router: Router, private modalService: BsModalService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe(providers => {
      this.provider = providers;
    })
  }

  modal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  deleteProduct() {
    if (this.value == 1) {
      this.service.delete(this.provider).subscribe(() => {
        this.service.showMessage('Sistema', 'Fornecedor deletado com sucesso!', 'toast-success');
        this.router.navigate(['/providers']);
      })
    } else {
      this.decline();
    }
  }

  cancel() {
    this.router.navigate(['/providers'])
  }

  confirm(): void {
    this.value = 1;
    this.modalRef?.hide();
    this.deleteProduct();
    //console.log(this.value)
  }

  decline(): void {
    this.value = 2;
    this.modalRef?.hide();
    //console.log(this.value)
  }


}
