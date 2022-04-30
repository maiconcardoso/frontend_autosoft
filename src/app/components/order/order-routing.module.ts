import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCrudComponent } from 'src/app/views/order-crud/order-crud.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderDeleteComponent } from './order-delete/order-delete.component';
import { OrderItemCreateComponent } from './order-item/order-item-create/order-item-create.component';
import { OrderItemDeleteComponent } from './order-item/order-item-delete/order-item-delete.component';
import { OrderItemUpdateComponent } from './order-item/order-item-update/order-item-update.component';
import { OrderLaborCreateComponent } from './order-labor/order-labor-create/order-labor-create.component';
import { OrderLaborDeleteComponent } from './order-labor/order-labor-delete/order-labor-delete.component';
import { OrderLaborUpdateComponent } from './order-labor/order-labor-update/order-labor-update.component';
import { ItemByOrderComponent } from './order-item/item-by-order/item-by-order.component';
import { LaborByOrderComponent } from './order-labor/labor-by-order/labor-by-order.component';
import { OrderUpdateComponent } from './order-update/order-update.component';
//import { AuthGuard } from 'src/app/guards/auth.guard';
import { OrderPrintComponent } from './order-read/order-print/order-print/order-print.component';
import { ServiceOrderComponent } from './service-order/service-order.component';
import { SelectingCustomerForOrderComponent } from './selecting-customer-for-order/selecting-customer-for-order.component';

const routes: Routes = [
  
  { path: 'orders', component: OrderCrudComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'orders/create/customer', component: SelectingCustomerForOrderComponent},

  { path: 'orders/create/customer/:id', component: OrderCreateComponent},
  { path: 'orders/:id', component: ServiceOrderComponent},

  { path: 'orders/create/:id_order/labors', component: LaborByOrderComponent},
  { path: 'orders/create/:id_order/labors/:id_labor', component: OrderLaborCreateComponent },
  { path: 'orders/create/:id_order/products', component: ItemByOrderComponent},
  { path: 'orders/create/:id_order/products/:id_item', component: OrderItemCreateComponent},
  
  { path: 'orders/update/:id_order', component: OrderUpdateComponent },
  { path: 'orders/update/:id_order/products/update/:id_item', component: OrderItemUpdateComponent },
  { path: 'orders/update/:id_order/labors/update/:id_labor', component: OrderLaborUpdateComponent },

  { path: 'orders/order-print/:id', component: OrderPrintComponent},

  { path: 'orders/delete/:id_order', component: OrderDeleteComponent },
  { path: 'orders/delete/:id_order/products/delete/:id_item', component: OrderItemDeleteComponent },
  { path: 'orders/delete/:id_order/labors/delete/:id_labor', component: OrderLaborDeleteComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
