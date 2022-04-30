import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/model/provider.model';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-provider-read',
  templateUrl: './provider-read.component.html',
  styleUrls: ['./provider-read.component.css']
})
export class ProviderReadComponent implements OnInit {

  providers: Provider[];
  displayedColumns = ['id', 'name', 'phoneNumber', 'cnpj', 'email', 'city', 'address' , 'cep', 'action'];
  providerFilter: any = {name: ''};

  constructor(private service: ProviderService) { }

  ngOnInit(): void {
    this.findAllProviders();
  }

  findAllProviders() {
    this.service.readAll().subscribe(response => {
      this.providers = response;
    });
  }

}
