import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerReadComponent } from './customer-read/customer-read.component';

import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { OrderModule } from '../order/order.module';

@NgModule({
  declarations: [
    CustomerReadComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    OrderModule
  ],
  exports: [
    CustomerReadComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
  ]
})
export class CustomerModule { }
