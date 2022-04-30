import { NgModule } from '@angular/core';

import { TemplateRoutingModule } from './template-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ]
})
export class TemplateModule { }
