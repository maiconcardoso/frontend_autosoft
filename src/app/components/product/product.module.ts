import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductReadComponent } from './product-read/product-read.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { SharedModule } from 'src/app/shared-module/shared.module';


@NgModule({
  declarations: [
    ProductDeleteComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  exports: [
    ProductDeleteComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent
  ]
})
export class ProductModule { }
