import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';
import { ProviderCreateComponent } from './provider-create/provider-create.component';
import { ProviderReadComponent } from './provider-read/provider-read.component';
import { ProviderDeleteComponent } from './provider-delete/provider-delete.component';
import { SharedModule } from 'src/app/shared-module/shared.module';


@NgModule({
  declarations: [
    ProviderUpdateComponent,
    ProviderCreateComponent,
    ProviderReadComponent,
    ProviderDeleteComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    SharedModule
  ],
  exports: [
    ProviderUpdateComponent,
    ProviderCreateComponent,
    ProviderReadComponent,
    ProviderDeleteComponent
  ]
})
export class ProviderModule { }
