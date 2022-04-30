import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProductCrudComponent } from 'src/app/views/product-crud/product-crud.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  { path: 'products', component: ProductCrudComponent,/*canActivate: [AuthGuard]*/},
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/update/:id', component: ProductUpdateComponent},
  { path: 'products/delete/:id', component: ProductDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
