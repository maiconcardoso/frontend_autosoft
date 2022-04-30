import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProviderCrudComponent } from 'src/app/views/provider-crud/provider-crud.component';
import { ProviderCreateComponent } from './provider-create/provider-create.component';
import { ProviderDeleteComponent } from './provider-delete/provider-delete.component';
import { ProviderReadComponent } from './provider-read/provider-read.component';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';

const routes: Routes = [
  {path: 'providers', component: ProviderCrudComponent, /*canActivate: [AuthGuard]*/},
  {path: 'providers/create', component: ProviderCreateComponent},
  {path: 'providers/update/:id', component: ProviderUpdateComponent},
  {path: 'providers/delete/:id', component: ProviderDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
