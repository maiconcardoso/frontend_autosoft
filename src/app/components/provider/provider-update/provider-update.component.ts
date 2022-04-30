import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from 'src/app/model/provider.model';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.css']
})
export class ProviderUpdateComponent implements OnInit {

  provider: Provider = {
    name: '',
    phoneNumber: '',
    cnpj: '',
    email: '',
    city: '',
    address: '',
    cep: ''
  };

  constructor(private router: Router, private service: ProviderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe(providers => {
      this.provider = providers;
    })
  }

  updateProvider(){
    this.service.update(this.provider).subscribe(() => {
      this.service.showMessage('Sistema', 'Fornecedor atualizado com sucesso!', 'toast-success');
      this.router.navigate(['/providers']);
    }) 
  }

  cancel() {
    this.router.navigate(['/providers']);
  }

}
