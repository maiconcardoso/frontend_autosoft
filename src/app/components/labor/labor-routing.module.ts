import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LaborCrudComponent } from 'src/app/views/labor-crud/labor-crud.component';
import { LaborCreateComponent } from './labor-create/labor-create.component';
import { LaborDeleteComponent } from './labor-delete/labor-delete.component';
import { LaborUpdateComponent } from './labor-update/labor-update.component';

const routes: Routes = [
  { path: 'labors', component: LaborCrudComponent, /*canActivate: [AuthGuard]*/},
  { path: 'labors/create', component: LaborCreateComponent },
  { path: 'labors/update/:id', component: LaborUpdateComponent },
  { path: 'labors/delete/:id', component: LaborDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaborRoutingModule { }
