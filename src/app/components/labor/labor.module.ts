import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaborRoutingModule } from './labor-routing.module';
import { LaborCreateComponent } from './labor-create/labor-create.component';
import { LaborUpdateComponent } from './labor-update/labor-update.component';
import { LaborDeleteComponent } from './labor-delete/labor-delete.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { LaborReadComponent } from './labor-read/labor-read.component';


@NgModule({
  declarations: [
    LaborCreateComponent,
    LaborUpdateComponent,
    LaborReadComponent,
    LaborDeleteComponent
  ],
  imports: [
    CommonModule,
    LaborRoutingModule,
    SharedModule
  ],
  exports: [
    LaborCreateComponent,
    LaborUpdateComponent,
    LaborDeleteComponent,
    LaborReadComponent,
  ]
})
export class LaborModule { }
