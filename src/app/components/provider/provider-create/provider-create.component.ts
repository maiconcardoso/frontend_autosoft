import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from 'src/app/model/provider.model';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-provider-create',
  templateUrl: './provider-create.component.html',
  styleUrls: ['./provider-create.component.css']
})
export class ProviderCreateComponent implements OnInit {

  provider: Provider = {
    name: '',
    phoneNumber: '',
    cnpj: '',
    email: '',
    city: '',
    address: '',
    cep: ''
  }

  constructor(private router: Router, private service: ProviderService) { }

  ngOnInit(): void {
  }

  createProvider(): void { 
    if (this.provider.name != '') {
      this.service.create(this.provider).subscribe(() => {
        this.service.showMessage('Sistema', `Fornecedor ${this.provider.name} criado com sucesso!`, 'toast-success');
        this.router.navigate(['/providers']);
      })
    } else {
      this.service.showMessage('Atenção!', 'O nome do fornecedor deve ser preenchido', 'toast-info')
    }
  }

  cancel() {
    this.router.navigate(['/providers']);
  }

}
