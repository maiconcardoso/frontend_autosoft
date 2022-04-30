import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CustomerCrudComponent } from 'src/app/views/customer-crud/customer-crud.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';

const routes: Routes = [
  { path: 'customer', component: CustomerCrudComponent, /*canActivate: [AuthGuard]*/},
  { path: 'customer/create', component: CustomerCreateComponent },
  { path: 'customer/update/:id', component: CustomerUpdateComponent },
  { path: 'customer/delete/:id', component: CustomerDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
