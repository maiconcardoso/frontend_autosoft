import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderUpdateComponent } from './order-update/order-update.component';
import { OrderDeleteComponent } from './order-delete/order-delete.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { OrderReadComponent } from './order-read/order-read.component';
import { CustomerByOrderComponent } from './order-create/customer-by-order/customer-by-order.component';
import { OrderExecutionComponent } from './order-create/order-execution/order-execution.component';
import { OrderLaborCreateComponent } from './order-labor/order-labor-create/order-labor-create.component';
import { OrderLaborUpdateComponent } from './order-labor/order-labor-update/order-labor-update.component';
import { OrderLaborReadComponent } from './order-labor/order-labor-read/order-labor-read.component';
import { OrderLaborDeleteComponent } from './order-labor/order-labor-delete/order-labor-delete.component';
import { LaborByOrderComponent } from './order-labor/labor-by-order/labor-by-order.component';
import { ItemByOrderComponent } from './order-item/item-by-order/item-by-order.component';
import { OrderItemReadComponent } from './order-item/order-item-read/order-item-read.component';
import { OrderItemCreateComponent } from './order-item/order-item-create/order-item-create.component';
import { OrderItemUpdateComponent } from './order-item/order-item-update/order-item-update.component';
import { OrderItemDeleteComponent } from './order-item/order-item-delete/order-item-delete.component';
import { InsertProductAndLaborComponent } from './order-create/insert-product-and-labor/insert-product-and-labor.component';
import { OrderPrintComponent } from './order-read/order-print/order-print/order-print.component';


@NgModule({
  declarations: [
    OrderCreateComponent,
    OrderReadComponent,
    OrderUpdateComponent,
    OrderDeleteComponent,
    CustomerByOrderComponent,
    OrderExecutionComponent,
    OrderLaborCreateComponent,
    OrderLaborUpdateComponent,
    OrderLaborReadComponent,
    OrderLaborDeleteComponent,
    LaborByOrderComponent,
    ItemByOrderComponent,
    OrderItemCreateComponent,
    OrderItemUpdateComponent,
    OrderItemReadComponent,
    OrderItemDeleteComponent,
    InsertProductAndLaborComponent,
    OrderPrintComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    OrderCreateComponent,
    OrderReadComponent,
    OrderUpdateComponent,
    OrderDeleteComponent,
    CustomerByOrderComponent,
  ]
})
export class OrderModule { }
